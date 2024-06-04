import { shoe8 } from "../assets/images/index.js"
import Button from "../components/Button.jsx"


const SuperQuality = () => {
  return (
    <section id="about-us"
     className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> 
          We Provide You
          <span className="text-coral-red "> Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring Premium comfort and stye, our meticulously craftedfootwear is designed to elevate your experience, proving you with unmatched quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
        <Button label="View Details"/>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8}
         alt="shoe8"
         width={570}
         height={522}
         className="object-contain"
         />
      </div>
     </section>
  )
}

export default SuperQuality