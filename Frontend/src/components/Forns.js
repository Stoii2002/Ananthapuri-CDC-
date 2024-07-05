import { useForm } from 'react-hook-form'; // Using react-hook-form for form handling
import axios from 'axios'; // Axios for making API requests

function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Destructuring the react-hook-form methods

    const onSubmit = async (data) => {
        console.log("Submitting Data:", data); // Logging the data to check the structure
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/form-entries/', data, {
                headers: {
                    'Content-Type': 'application/json', // Ensuring the content type is JSON
                }
            });
            console.log("API Response:", response.data); // Logging the API response (optional success message)
        } catch (error) {
            console.error("Error Submitting Data:", error); // Handling and logging errors
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                {...register('name', { 
                    required: "Name is required", 
                    maxLength: { value: 100, message: "Name cannot exceed 100 characters" } 
                })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>} {/* Displaying error message for name */}

            <label htmlFor="address">Address:</label>
            <textarea
                id="address"
                {...register('address', { required: "Address is required" })}
            />
            {errors.address && <span className="error">{errors.address.message}</span>} {/* Displaying error message for address */}

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="tel"
                id="phoneNumber"
                {...register('phoneNumber', { 
                    required: "Phone number is required", 
                    maxLength: { value: 20, message: "Phone number cannot exceed 20 digits" },
                    pattern: { value: /^[0-9]*$/, message: "Phone number must contain only digits" } 
                })}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>} {/* Displaying error message for phone number */}

            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                {...register('description', { required: "Description is required" })}
            />
            {errors.description && <span className="error">{errors.description.message}</span>} {/* Displaying error message for description */}

            <button type="submit">Submit</button> {/* Submit button */}
        </form>
    );
}

export default MyForm;
