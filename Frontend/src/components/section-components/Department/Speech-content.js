import React from 'react';
import Departmentaside from '../Department-aside';


const Speech_content = () => {

    return (
        <section className="space-top space-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8 col-lg-8">
                    <div className="page-single mb-0">
                       
                        <div className="page-content">
                            <h3 className="sec-title page-title">Speech Therapy: Enhancing Communication Skills in Children</h3>
                            <p className="sec-text mb-30">
                            Speech therapy may be the thing that you are looking for if your child is suffering from speech disability like trouble pronouncing words. The principal objective of speech therapy is to get the child speaking, but apart from that speech therapy also focuses on enhancing the child’s ability to understand and express language. People who are imparting speech therapy are called speech therapists or speech and language pathologists (SLP).
                            </p>
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/speech-img-1.png`} alt="class Image"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/speech-img-2.png`} alt="class Image"/>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-n2 mb-20">SPEECH THERAPY COVERS MAINLY THREE ASPECTS OF COMMUNICATION:</h4>
                            <p className="mb-20">
                                <ol>
                                    <li>Coordinating the mouth to produce sounds to form words and sentences (articulation, fluency, and voice volume regulation)</li>
                                    <li>Understanding and expressing language (through written, pictorial, body, and sign forms)</li>
                                    <li>The use of language through alternative communication systems (social media, computers, and tablets)</li>
                                </ol>
                            </p>
                            <p className="mb-20">
                            The service of the speech therapist or SLP may be required for a variety of disorders. Not only speech, but issues with hearing and swallowing can also be dealt by a speech therapist or SLP. The following areas of communication come under the purview of a speech therapist.
                            </p>
                            <p className="mb-20">
                                <ul>
                                    <li>Stuttering and cluttering</li>
                                    <li>Comprehension of spoken and written language</li>
                                    <li>Cognition related issues like attention, memory and ability to solve problems</li>
                                    <li>Characteristics of vocal tone</li>
                                    <li>Auditory Rehabilitation — recovery techniques associated with speech, hearing & language disorders</li>
                                    <li>Swallowing disorders — stroke and congenital disorders</li>
                                    <li>Other services — some therapists will specialize in other services including professional voice development, accent or dialect modification, business communication modification, and voice hygiene</li>
                                </ul>
                            </p>
                            <h4 className="mt-n2 mb-20">WHO NEEDS SPEECH THERAPY?</h4>
                            <p className="mb-20">
                            Some children may be early talkers or able to read well, even such kids can seek the service of speech therapy to get an understanding on using body language to put across the point they want to communicate in a better way. This will make children proficient in expressing themselves such as making requests, holding conversation, making new friends etc.
                            </p>
                            <p className="mb-20">
                            Other occasions where a child needs the service of a speech therapist are purely on medical grounds such as injury to the brain or infection that has impaired their ability to communicate in a normal manner and an identifiable disability such as Down syndrome. Identifying the need for a speech therapy at an early age will vastly improve the outcome of the therapy by a large extent.
                            </p>

                             <h4 className="mt-n2 mb-20">IS YOUR CHILD A LATE-TALKER?</h4>
                            <p className="mb-20">
                            If you think your toddler is way past the time of making first signs of talking, speech therapy may be the thing that you needed. Being a speech therapist, she/he knows how to get a child speak through various child-friendly tricks, that may even include playing hide-seek with them!
                            </p>
                            <p className="mb-20">
                            Sometimes they may spur the child to talk by taking away his/her favorite toy. A speech therapist also assesses the child’s hearing ability and if they sense something amiss, they may refer the child for further hearing tests.
                            </p>

                            <h4 className="mt-n2 mb-20">DO SPEECH THERAPISTS DEAL WITH SWALLOWING AND HEARING DIFFICULTIES?
                            </h4>
                            <p className="mb-20">
                            Yes, they do! The general public is familiar with speech therapy related to training children on articulation, language and cognition difficulties, but what they tend to overlook is speech therapy for swallowing and feeding difficulties. It is not uncommon to come across children with difficulty in communication have issues with feeding. It may remind you of children with speech needs, but seemingly normal kids also have speech and feeding difficulties because both speech and eating calls for fine motor movements – moving the tongue, jaw and lips in a synchronic fashion. It may be something that naturally happens to grown-ups, but at the early stages of life it is something that they have to work on.
                            </p>
                            <p className="mb-20">
                            Speech therapist will focus on strengthening the muscles involved in speech and eating, to achieve it they may carry out unique programs such as blowing toys and whistles or funny games like blowing-the-cotton-ball, blowing bubbles etc. Children will be glad to take part in these fun-filled activities that would strengthen the muscles involved in speech and eating.
                            </p>

                            <h4 className="mt-n2 mb-20">SPEECH THERAPY FOR STUTTERING:</h4>
                            <p className="mb-20">
                            Stuttering is something that one might associate speech therapy with the most. It is a common issue in childhood and can even persist along the adulthood. Stuttering is a type of behavioral issue. A child with stuttering may be introduced to different behavioral techniques to deal with this nagging issue. Controlling the rate of speech is something that shows a sea change in people who stutter as speaking fast can aggravate an already existing speech disorder. Speaking in a slower and fluent manner is a sure shot method of improving stuttering.
                            </p>

                            <h4 className="mt-n2 mb-20">WHAT IF THE CHILD IS NOT MAKING VERBAL COMMUNICATION?</h4>
                            <p className="mb-20">
                            As we know, there are children who cannot communicate verbally owing to multitude of medical issues. They require alternative communication methods. In this day and age, speech therapists use computers and tablets to boost non-verbal communication. Touch-screen gadgets have become a great boon for children to express themselves effortlessly, enabling them to use the same super-cool device like their classmates.
                            </p>
                            <p className="mb-20">
                            For enquiries related to speech therapy, send a message to <a href='www.AnanthapuriCDC.com/contact' target="_blank" rel="noopener noreferrer">www.AnanapuriCDC.com/contact</a>
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className="col-xxl-4 col-lg-4">
                    <Departmentaside/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Speech_content;
