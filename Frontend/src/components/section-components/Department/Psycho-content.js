import React from 'react';
import Departmentaside from '../Department-aside';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Psycho_content = () => {

    return (
        <section className="space-top space-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8 col-lg-8">
                    <div className="page-single mb-0">
                        <Helmet>
                        <div className="page-content">
                            <h3 className="sec-title page-title">Behavioural therapy for kids in Ananthapuri Child Development Centre.</h3>
                            <h4 className='sec-title page-title mt-3'>What is Behavioural Therapy?</h4>
                            <p className="sec-text mb-30">
                            Behavioural therapy is a treatment that identifies and resolves behavioural disorders in children. It will identify self-destructive behaviours in your kids and reinforce with desirable behaviours by eliminating the unwanted ones. The focus of this treatment is based on current behavioural problems and how to change them. It is mainly based on the idea that all behaviours are learnt and that can be changed with structured therapy sessions.
                            </p>

                            <h4 className='sec-title page-title'>Behavioural Therapy in Trivandrum Ananthapuri Child Development Centre. </h4>
                            <p className="sec-text mb-45">
                            At <Link to="https://www.ananthapuricdc.com/ "> Ananthapuri Child Development Centre</Link>, our behavioural therapists will do a detailed psychological assessment to understand your child's personality, emotions, <Link to="https://www.codewizardshq.com/logical-reasoning-for-kids/">logical thinking</Link>, and personal likes and dislikes. They will use different methods for this. They will impart training on life skills, responsive prevention techniques, behaviour modelling, habit reversal, relaxation, etc., which is essential for behavioural development.
                            </p>

                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/psycho-img-1.png`} alt="class Image"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/psycho-img-2.png`} alt="class Image"/>
                                    </div>
                                </div>
                            </div>

                            
                            <h5>
                            Behavioural therapy benefits kids with a wide range of developmental disorders like:
                            </h5>
                            <ul>
                                <li><Link to="https://www.ananthapuricdc.com/ADHD ">Attention Deficit Hyperactivity Disorder (ADHD) </Link></li>
                                <li><Link to="https://en.wikipedia.org/wiki/Dyslexia">Dyslexia </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Senory">Sensory Processing Disorder (SPD) </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Autism">Autism Spectrum Disorder (ASD) </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Cerebral-Palsy">Cerebral Palsy </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Intellectual-Disability">Intellectual Disability (ID) </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Downs-Syndrome">Down Syndrome</Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Counduct-Disorder">Conduct Disorder</Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Learning-Disability">Learning Disability</Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Virtual-Autism ">Virtual Autism </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Stuttering ">Stuttering </Link></li>
                                <li><Link to="https://www.ananthapuricdc.com/Gdd">Global Developmental Delay (GDD)</Link></li>
                               
                            </ul>
                            <p className="mb-20">
                            If your child is facing any of these developmental challenges, our behavioural therapist in Trivandrum <Link to="https://www.ananthapuricdc.com/">Ananthapuri Child Development Centre</Link> can help them get better at social interactions. 
                            </p>
                            <p className="mb-20">
                            Kids who don't have any developmental delays also show self-destructive behaviours. Such kids can also benefit from our behavioural therapy.
                            </p>


                            <h4 className='sec-title page-title'>Signs That Your Child Need Our Behavioural Therapy.</h4>
                            <ul>
                                <li>Self-destructive behaviour.</li>
                                <li>Disrespecting people.</li>
                                <li>Continuous Lying and stealing </li>
                                <li>Abnormal sleeping and eating habits</li>
                                <li>Early sexual activities</li>
                                <li>Poor academic performance</li>
                            </ul>
                            <p className="mb-20">
                            If any of the signs listed above align with your child's behavior, it's time to book a therapy session at Ananthapuri Child Development Centre.
                            </p>

                            <h4 className='sec-title page-title'>Features of Behavioural Therapy in Trivandrum Ananthapuri Child Development Centre</h4>
                            <ul>
                                <li>Our behavioural therapy sessions will help your child to identify the triggers of bad behaviours and train them how to control those triggers with emotional intelligence.</li>
                                <li>To improve the desirable behaviours in your kid, our therapists will create a reward chart that helps them to distinguish between good and bad behaviours.</li>
                                <li>We will guide parents to have effective communication with their child.</li>
                            </ul>

                            <h4 className='sec-title page-title'>Types of Behavioural Therapy.</h4>
                                <ul>
                                    <li><Link to="https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384610">Cognitive behavioural therapy.</Link></li>
                                    <li><Link to="https://cbpt.org/en/cbpt-homepage/">Cognitive behavioural play therapy.</Link> </li>
                                    <li><Link to="https://www.psychologytoday.com/intl/therapy-types/acceptance-and-commitment-therapy ">Acceptance and Commitment therapy.</Link></li>
                                    <li><Link to="https://www.autismspeaks.org/applied-behavior-analysis ">Applied behaviour analysis.</Link></li>
                                    <li><Link to="https://childmind.org/article/dbt-dialectical-behavior-therapy/#:~:text=DBT%20stands%20for%20dialectical%20behavior,substance%20abuse%2C%20and%20suicidal%20thoughts. ">Dialectical behavioural play therapy.</Link></li>
                                    <li><Link to="https://my.clevelandclinic.org/health/treatments/25067-exposure-therapy">Exposure therapy.</Link></li>
                                    <li><Link to="https://www.verywellmind.com/rational-emotive-behavior-therapy-2796000">Rational emotive behaviour therapy. </Link></li>
                                    <li><Link to="https://www.verywellmind.com/social-learning-theory-2795074">Social learning theory.</Link></li>
                                </ul>


                            <h4 className='sec-title page-title'>How will behavioural therapy in Trivandrum Ananthapuri Child Development help your child?</h4>
                            <p className="mb-20">
                            Most of the parents are not ready to discuss their child's flaws with a third person, but we need to understand that kids with <Link to="https://www.betterhealth.vic.gov.au/health/healthyliving/behavioural-disorders-in-children ">behavioural challenges</Link> need care from a professional behavioural therapist. We promise you that our behavioural therapy program will always ensure your child's safety and privacy. As a team of experienced behavioural therapists, we work together with your child to address their difficulties.
                            </p>
                            <p className="mb-20">
                            <Link to="https://www.ananthapuricdc.com/ ">Ananthapuri Child Development</Link> Centre offers the best behavioural therapy in Trivandrum for children who are affected by ADHD, autism, and other behavioural challenges. So, if you're looking for behavioural therapy in Trivandrum, then <Link to="https://www.ananthapuricdc.com/contact">contact us today</Link>to book a session for your child's future.
                            </p>
                            
                            
                        </div>
                        </Helmet>
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

export default Psycho_content;
