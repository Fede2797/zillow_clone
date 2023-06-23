
const articles = [
    { image: "pictures/Buy_a_home.webp", title: "Buy a home", subtitle: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else", button: "Browse homes" },
    { image: "pictures/Sell_a_home.webp", title: "Sell a home", subtitle: "No matter what path you take to sell your home, we can help you navigate a successful sale.", button: "See your options" },
    { image: "pictures/Rent_a_home.webp", title: "Rent a home", subtitle: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.", button: "Find rentals" },
]

export const MainContent = () => {
  return (
    <div className="flex flex-col">
        {/* First section - "Get recomendations" */}
        <section className="pt-4 flex flex-col items-center justify-center sm:flex-row overflow-hidden font-open-sans xs:pt-8 sm:py-20 lg:mx-16">
            <div className="min-w-[336px] mx-6 my-8 flex flex-col text-center justify-center items-center sm:my-auto">
                <h1 className="pb-2 text-[20px] font-bold">Get home recommendations</h1>
                <h2 className="text-textGrey">Sign in for a more personalized experience</h2>
                <button className="mt-4 px-4 py-[9px] rounded-[4px] outline outline-1 outline-blue text-blue font-bold hover:outline-[#0d4599] hover:text-[#0d4599] hover:bg-[#f2faff] transition-all">Sign in</button>
            </div>
            {/* Picture */}
            <div className="w-[600px] h-[144px] bg-[url('../pictures/GatedCarousel_Mobile.webp')] bg-center sm:bg-[url('../pictures/GatedCarousel_Desktop.webp')] sm:w-[792px] sm:h-[248px] sm:bg-left bg-no-repeat">
            </div>
        </section>
        {/* Second section - "Buy/Sell/Rent a Home" */}
        <section className="flex flex-col items-center pt-12 pb-6 bg-bgGrey font-open-sans lg:flex-row lg:gap-6 lg:pt-16 lg:pb-10 lg:justify-center">
            {
                articles.map( a => (
                    <div key={a.title} className="group mb-6 p-6 flex flex-col items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)] bg-white text-center xs:max-w-[88%] xs:rounded-[4px] xs:items-start xs:text-start xs:p-4 sm:flex-row md:max-w-[632px] lg:flex-col lg:w-full lg:max-w-[384px] lg:h-[536px] lg:p-6 lg:items-center lg:text-center hover:cursor-pointer lg:hover:scale-105 lg:transition lg:ease-in-out lg:duration-200 hover:shadow-[0px_2px_8px_1px_rgba(0,0,0,0.3)]">
                        <img className="max-h-[188px] mt-4 sm:w-[45%] sm:h-[188px] lg:w-auto" src={a.image} alt="" />
                        <div className="flex flex-col sm:w-[55%] md:ml-4 lg:w-auto lg:items-center">
                            <h1 className="mt-4 text-[24px] font-frank-ruhl">{a.title}</h1>
                            <p className="mt-4 lg:h-[96px]">{a.subtitle}</p>
                            <div className="flex justify-center xs:justify-start">
                                <button className="my-6 px-4 py-[9px] rounded-[4px] outline outline-1 outline-blue text-blue font-bold group-hover:outline-[#0d4599] group-hover:text-white group-hover:bg-[#006aff] transition-all">{a.button}</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>

    </div>
  )
}
