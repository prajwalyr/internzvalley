import React from 'react';
import { Link } from 'react-router-dom';

const CourseTypeOne = ({ data, classes }) => {
    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i key={i} className={`ri-star-${i < fullStars ? 'fill' : 'line'}`} style={{ color: '#FFC107', marginRight: '2px' }}></i>
            );
        }
        return stars;
    };

    return (
        <Link to={process.env.PUBLIC_URL + `/course-details-three/${data.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <div className={`course-item ${classes ? classes : ''}`} style={{ cursor: 'pointer', height: '100%' }}>
                <div 
                    className="course-style-5 bg-white" 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '100%',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                        e.currentTarget.style.transform = 'translateY(-8px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <div className="course-header">
                        <div className="course-thumb" style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0', height: '200px' }}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/course/course-01/${data.image}`} 
                                alt="Course Thumb" 
                                className="img-fluid"
                                style={{ transition: 'transform 0.3s ease', width: '100%', height: '100%', objectFit: 'cover' }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    <div className="course-content" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', lineHeight: '1.4', color: '#1a1a1a' }}>
                                {data.title}
                            </h4>
                            {data.description && (
                                <p className="course-description" style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: '1.5' }}>
                                    {truncateText(data.description, 15)}
                                </p>
                            )}
                            {data.rating && (
                                <div className="course-rating" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {renderStars(parseFloat(data.rating))}
                                    </div>
                                    <span style={{ fontSize: '0.9rem', color: '#333', fontWeight: '600' }}>({data.rating})</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CourseTypeOne;