import React from 'react';
import Layout from '../../common/Layout';
import PageBanner from '../layouts/common/PageBanner';

const HireFromUs = () => {
    const [activeTab, setActiveTab] = React.useState('mnc');

    const tabItems = [
        {
            id: 'mnc',
            title: 'For MNCs (Full-time Positions)',
            content: (
                <div>
                    <h3>Your Partner in Talent Acquisition for MNCs</h3>
                    <p>
                        Finding the right talent for your multinational corporation (MNC) is essential for driving growth and innovation. Our comprehensive hiring services are designed to connect you with top-tier professionals who can contribute to your company’s success.
                    </p>
                    <br />
                    <h3>Why Partner with Us?</h3>
                    <ul>
                        <li>
                            <strong>Extensive Network: </strong> Our vast network of candidates spans across industries and geographies, allowing us to identify the best talent for your MNC. Whether you’re looking for executives, managers, or entry-level employees, we have access to a diverse pool of candidates.
                        </li>
                        <li>
                            <strong>Industry Expertise:</strong> With years of experience in talent acquisition, our team understands the unique hiring challenges faced by MNCs. We leverage our industry expertise to provide tailored solutions that align with your company’s goals and culture.
                        </li>
                        <li>
                            <strong>Global Reach:</strong> As an MNC, you need access to talent from around the world. Our global reach enables us to source candidates from different countries and regions, ensuring that you have access to the best talent regardless of location.
                        </li>
                    </ul>
                    <br />
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <strong>Permanent Placement:</strong> Our permanent placement services help you find full-time employees who are committed to making a long-term impact on your organization. We handle everything from sourcing and screening candidates to conducting interviews and negotiating offers.
                        </li>
                        <li>
                            <strong>Executive Search:</strong> Searching for top-level executives to lead your MNC? Our executive search services specialize in finding visionary leaders who can drive your company’s growth and success on a global scale.
                        </li>
                        <li>
                            <strong>Recruitment Process Outsourcing (RPO):</strong> Outsource your entire recruitment process to us and let our experts handle everything from sourcing and screening to onboarding. With our RPO services, you can streamline your hiring process and focus on your core business activities.
                        </li>
                    </ul>
                    <br />
                    <h3>Get Started Today</h3>
                    <p>
                        Ready to find the perfect candidates for your MNC? Contact us today to learn more about our hiring services and how we can help you attract top talent to your organization.
                    </p>
                </div>
            ),
        },
        {
            id: 'freelancers',
            title: 'For Freelancers',
            content: (
                <div>
                    <h3>Your Gateway to Freelance Opportunities</h3>
                    <p>
                        As a freelancer, finding the right projects can be challenging. That’s where we come in. Our platform connects you with exciting freelance opportunities that match your skills and expertise, allowing you to take your career to the next level.
                    </p>
                    <br />
                    <h3>Why Join Us?</h3>
                    <ul>
                        <li>
                            <strong>Diverse Opportunities: </strong> Whether you’re a writer, designer, developer, marketer, or consultant, we have a wide range of freelance opportunities available. From short-term gigs to long-term contracts, you can find projects that suit your interests and availability.
                        </li>
                        <li>
                            <strong>Flexibility:</strong> As a freelancer, you value flexibility. Our platform allows you to choose projects that fit your schedule and preferences. Whether you prefer remote work or onsite gigs, you have the freedom to work on projects that align with your lifestyle.
                        </li>
                        <li>
                            <strong>Competitive Compensation:</strong> We believe in fair compensation for freelancers. Our platform connects you with clients who offer competitive rates and timely payments, ensuring that you’re rewarded for your hard work and expertise.
                        </li>
                    </ul>
                    <br />
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <strong>Project Matching:</strong> Our advanced matching algorithm pairs you with projects that match your skills, experience, and preferences. Say goodbye to endless searching and let us find the perfect projects for you.
                        </li>
                        <li>
                            <strong>Payment Protection:</strong> We prioritize your financial security. With our payment protection measures in place, you can rest assured that you’ll receive payment for your work in a timely manner.
                        </li>
                        <li>
                            <strong>Support and Resources:</strong> From onboarding assistance to ongoing support, our team is here to help you succeed as a freelancer. Access resources, tools, and guidance to enhance your skills and grow your freelance career.
                        </li>
                    </ul>
                    <br />
                    <h3>Get Started Today</h3>
                    <p>
                        Ready to take your freelance career to new heights? Join our platform today and unlock a world of exciting opportunities.
                    </p>
                </div>
            ),
        },
        {
            id: 'project',
            title: 'For Project-based',
            content: (
                <div>
                    <h3>Your Trusted Partner for Project-based Hiring</h3>
                    <p>
                        When you have short-term projects that require specialized skills, finding the right talent is crucial. Our project-based hiring services connect you with experienced professionals who can deliver high-quality results on time and within budget.
                    </p>
                    <br />
                    <h3>Why Choose Us?</h3>
                    <ul>
                        <li>
                            <strong>Rapid Deployment:</strong> With our extensive network of skilled professionals, we can quickly assemble project teams to meet your urgent deadlines. Whether you need developers, designers, marketers, or consultants, we have the expertise to get your project off the ground fast.
                        </li>
                        <li>
                            <strong>Scalability:</strong> No project is too big or too small for us to handle. Whether you need a single freelancer or an entire team, we can scale our services to match the scope and complexity of your project.
                        </li>
                        <li>
                            <strong>Quality Assurance:</strong> We understand the importance of delivering exceptional results. Our rigorous screening process ensures that all our candidates meet the highest standards of quality and professionalism, giving you peace of mind that your project is in good hands.
                        </li>
                    </ul>
                    <br />
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <strong>Project Staffing:</strong> Our project staffing services help you build a team of skilled professionals tailored to your project requirements. From developers and designers to project managers and QA testers, we have the talent you need to succeed.
                        </li>
                        <li>
                            <strong>On-demand Expertise:</strong> Need specialized expertise for a specific project phase? Our on-demand experts are here to help. Whether you need strategic guidance, technical support, or creative input, we have the experts you need to make your project a success.
                        </li>
                        <li>
                            <strong>Project Management:</strong> Leave the project management to us. Our experienced project managers will oversee every aspect of your project, from planning and execution to monitoring and reporting, ensuring that everything stays on track and on budget.
                        </li>
                    </ul>
                    <br />
                    <h3>Get Started Today</h3>
                    <p>
                        Ready to kickstart your next project? Contact us today to learn more about our project-based hiring services and how we can help you assemble the perfect team for your project.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="hire-from-us-page">
            <Layout>
                <PageBanner title="Hire From Us" rootUrl="/" parentUrl="Home" currentUrl="Hire From Us" />

                <section className="section-padding page">
                    <div className="heading text-center mb-40">
                        <h2 className="font-lg">Unlock Your Potential with Our Comprehensive Hiring Solutions</h2>
                        <p>Tailored Services for MNCs, Freelancers, and Project-based Hiring Needs</p>
                    </div>

                    <div className="container">
                        <div
                            className="horizontal-accordion"
                            style={{
                                display: 'flex',
                                alignItems: 'stretch',
                                gap: '16px',
                                flexWrap: 'wrap',
                            }}
                        >
                            {tabItems.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        border: activeTab === tab.id ? '2px solid #20ad96' : '2px solid #ddd',
                                        backgroundColor: activeTab === tab.id ? '#e3f9f2' : '#fff',
                                        color: '#0f172a',
                                        borderRadius: '10px',
                                        padding: '18px 22px',
                                        flexGrow: 1,
                                        minWidth: '220px',
                                        cursor: 'pointer',
                                        boxShadow: activeTab === tab.id ? '0 5px 18px rgb(0 255 181 / 30%)' : '0 3px 10px rgba(0,0,0,0.08)',
                                        transition: 'all 0.2s ease-in-out',
                                        textAlign: 'left',
                                        fontWeight: activeTab === tab.id ? '700' : '500',
                                    }}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        <div
                            className="accordion-panel"
                            style={{
                                marginTop: '30px',
                                padding: '24px',
                                border: '1px solid #007aff',
                                borderRadius: '10px',
                                backgroundColor: '#f5faff',
                                boxShadow: '0 8px 20px rgba(0, 122, 255, 0.15)',
                            }}
                        >
                            {tabItems.map((tab) => {
                                if (tab.id !== activeTab) return null;
                                return (
                                    <div key={tab.id}>
                                        {typeof tab.content === 'string' ? (
                                            <p style={{ lineHeight: '1.75', color: '#334155', fontSize: '1.05rem' }}>{tab.content}</p>
                                        ) : (
                                            <div style={{ lineHeight: '1.75', color: '#334155', fontSize: '1.05rem' }}>{tab.content}</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default HireFromUs;
