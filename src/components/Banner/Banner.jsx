import './Banner.css'
import banner from '../../image/banner.png'
export default function Banner() {
    return (
        <section id="hero" class="hero d-flex align-items-center ">
            <div class="containerBanner ">
                <div class="descriptionBanner">
                    <h4 class="uppercase subtitleBanner fontOutline">welcome to oya</h4>
                    <h1 class="uppercase titleBanner fontOutline">a digital<br />agency</h1>
                    <div>
                        <div class="containerbtn">
                            <button class="btnBanner firstbtn">Get started</button>
                            <button class="btnBanner secondbtn">Get started</button>
                        </div>
                    </div>
                </div>
                <div class="imgBanner">
                    <img src={banner} class="imageBanner" alt="" />
                </div>
            </div>
        </section>
    );
}