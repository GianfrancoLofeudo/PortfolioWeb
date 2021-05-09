import React from 'react'

export const PortfolioCarrousel = () => {
    return (
        <>
        <section>
            <div className="blog">
                <div className="container">
                    <div className="owl-carousel owl-theme blog-post">
                        <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="./assets/Blog-post/post-1.jpg" alt="post-1">
                            <div className="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button className="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div className="blog-content" data-aos="fade-in" data-aos-delay="200">
                            <img src="./assets/Blog-post/post-3.jpg" alt="post-1">
                            <div className="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button className="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div className="blog-content" data-aos="fade-left" data-aos-delay="200">
                            <img src="./assets/Blog-post/post-2.jpg" alt="post-1">
                            <div className="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button className="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                        <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                            <img src="./assets/Blog-post/post-5.png" alt="post-1">
                            <div className="blog-title">
                                <h3>London Fashion week's continued the evolution</h3>
                                <button className="btn btn-blog">Fashion</button>
                                <span>2 minutes</span>
                            </div>
                        </div>
                    </div>
                    <div class="owl-navigation">
                        <span className="owl-nav-prev"><i className="fas fa-long-arrow-alt-left"></i></span>
                        <span className="owl-nav-next"><i className="fas fa-long-arrow-alt-right"></i></span>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
