import React from 'react';
import Departmentaside from '../Department-aside';


const Psycho_content = () => {

    return (
        <section className="space-top space-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8 col-lg-8">
                    <div className="page-single mb-0">
                        
                        <div className="page-content">
                            <h3 className="sec-title page-title">Child Psychotherapy: Helping Children Thrive</h3>
                            <p className="sec-text mb-30">
                            Psychotherapy is a type of therapy used to treat emotional problems and mental health conditions like autism and other developmental disorders. In involves talking to a trained therapist, either one-to-one or with your husband, wife or partner. It gives a deeper insight into your problems and worries and equips you to deal with your troublesome habits and wide range of issues.

Talking is the integral part of psychotherapy, but sometimes other methods like art, music, drama etc may be used. Psychotherapy helps you to open up yourself completely with the therapist; you can discuss the feelings you have about yourself. In some cases, joint therapy sessions are also offered for couples and families. The therapists provide utmost confidentiality, so you can trust them with information that may be personal and embarrassing.
                            </p>
                            <p className="sec-text mb-45">
                            There are several different types of psychotherapy including psychodynamic (psychoanalytic) psychotherapy, cognitive behavioral therapy (CBT), cognitive analytical therapy (CAT), interpersonal psychotherapy (IPT), the humanistic approaches, group therapy, and family therapy.

If you are undergoing psychotherapy, you are required to meet your therapist regularly, usually once a week. However, in some cases more frequent visits are required. A course involving 6 to 20 sessions are considered short-term sessions with each session lasting about 50 to 60 minutes.
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
                            <h4 className="mt-n2 mb-20">USE OF PSYCHOTHERAPY IN AUTISM AND OTHER DEVELOPMENTAL DISORDERS</h4>
                            <p className="mb-20">
                            Benefits of psychotherapy in treating autism and other disorders related to developmental growth are gaining momentum. Psychotherapy also supports parents, who suffer profoundly when they face the task of handholding their ward with developmental disorders like Down syndrome, Asperger syndrome, cerebral palsy and intellectual disability.
                            </p>
                            <p className="mb-20">
                            Often children diagnosed with autism and other developmental disorders like depression, anxiety, relationship issues have issues with responding to social cues. They tend to suffer with low social motivation and they prefer to do everything in isolation throughout their lifespan. Medical studies show that individuals diagnosed with developmental disorders like autism are at increased risk of developing depression. It may set in during early adolescence, when they develop increased awareness of their difficulty establishing peer relationships, a pivotal developmental task during the adolescent phase. Anxiety is often associated autism and can be problematic in many settings. Strong preference for highly restricted interests and activities further interfere with socialization and daily functioning. In these cases, psychotherapy can provide the individuals and their families with much-needed intervention to reduce negative mood behavior and facilitate increased comfort and effectiveness in socializing and engaging in daily activities.
                            </p>
                            <p className="mb-20">
                            If you think psychotherapy may be helpful to you or someone suffering from developmental disorders like autism, you can find a qualified clinician by speaking with your pediatric consultant. Selecting a psychotherapist who had specific training in developmental disorders can bring a positive change in the life of a person affected with the condition. There is a wing of psychotherapy that uses treatment model utilizing evidence-based interventions such as cognitive behavioral therapy.
                            </p>
                            <p className="mb-20">
                            Psychotherapy is built around the use of spoken word. For verbal people on the spectrum, psychotherapy can be an effective tool for dealing with symptoms such as anxiety or compulsions. With the help of psychotherapy people affected with autism can better understand how their actions and reactions are perceived by others.
                            </p>
                            <p className="mb-20">
                            Psychotherapy is often involved in the process of diagnosing both children and adults with autism and other developmental disorders. Once the disorder is identified, psychotherapists may recommend appropriate treatment programs. Psychotherapy encourages people with developmental disorders to engage with others through play and learn skills such as joint attention (doing something “with”, rather than “near”someone else).
                            </p>
                            <p className="mb-20">
                            School-based psychotherapy may work with students with autism and help them engage with their peers, manage stress or teach them tips to handle difficult interactions with bullies or general teasing. Psychotherapists may work with parents and teachers to device strategies to handle children with developmental disorders in an effective way.
                            </p>
                            <p className="mb-20">
                            Psychotherapists work with both children and adults with autism to treat issues such as social anxiety, depression, and perseverative behavior (doing or saying the same things over and over again). Psychotherapists also work with individuals with developmental disorders to help them manage self stimulation, social interactions, understand social cues, and manage school and work relationships.
                            </p>
                            <p className="mb-20">
                            Behavioral psychotherapy is in high demand within people affected with autism. Behavioral psychotherapists may evaluate autistic behaviors to better understand their meaning and purpose, develop behavioral programs to teach a wide range of skills or help families to manage aggression and other problematic behaviors in the home. This branch of psychotherapy has proven to be immense benefit in other developmental disorders as well.
                            </p>
                            <p className="mb-20">
                            To sum up, psychotherapy helps people with developmental disabilities cope with everyday concerns and longstanding problems. His/Her thoughts, feelings, and behaviors are observed and fine-tuned in a supportive environment and psychotherapy helps them develop better coping skills. The basic skills needed to benefit from psychotherapy include the ability to interact with a therapist and engagement in some form of interpersonal communication.
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

export default Psycho_content;
