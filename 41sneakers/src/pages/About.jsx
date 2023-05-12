import { SocialIcon } from "react-social-icons";

export const About = () => {
  return (
    <div>
      <div className="h-[100vh]"></div>
      <div id="contact" className="h-full w-full bg-zinc-900 text-white p-10">
        <div className="w-full justify-evenly flex flex-wrap md:flex-nowrap">
          <div className="w-[500px] text-4xl font-semibold mb-5">
            Contact Us
          </div>
          <div className="w-[600px] text-lg text-justify space-y-5">
            <p className="text-slate-600">
              We would love to hear from you! Whether you have a question or a
              feedback please don't hesitate to reach out. You can contact us
              through email, phone, or social media. We are committed to
              providing the best possible experience for our customers.we can't
              wait to connect with you!
            </p>
            <div className="w-[300px] space-y-2">
              <p className="w-full">call: +1-234-456-7890 </p>
              <p className="w-full">email: joezcoffee@emample.com</p>
              <div>
                <a href="https://www.grailed.com/90041Snkr">
                  <img
                    className="h-[50px] w-[50px] rounded-full bg-white mr-3"
                    src="https://user-images.githubusercontent.com/56804459/67166569-6154bd00-f399-11e9-96c0-b20c51b61062.png"
                    alt="grailed-icon"
                  />
                </a>
              </div>
              <div className="">
                <a
                  className="w-full"
                  href="https://www.instagram.com/90041sneakers/"
                >
                  <SocialIcon network="instagram" className="mr-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
