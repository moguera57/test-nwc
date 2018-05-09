//import ucfimg from './assets/img/bg.jpg'
import React from 'react'

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const general  = importAll(require.context('./assets/img', false, /\.(png|jpe?g|svg|tif)$/));
const eduimage = importAll(require.context('./assets/img/education', false, /\.(png|jpe?g|svg|tif)$/));
const incimage = importAll(require.context('./assets/img/incentives', false, /\.(png|jpe?g|svg|tif)$/));
const infimage = importAll(require.context('./assets/img/infrastructure', false, /\.(png|jpe?g|svg|tif)$/));
const prjimage = importAll(require.context('./assets/img/projects', false, /\.(png|jpe?g|svg|tif)$/));
const quaimage = importAll(require.context('./assets/img/quality', false, /\.(png|jpe?g|svg|tif)$/));
const susimage = importAll(require.context('./assets/img/sustainability', false, /\.(png|jpe?g|svg|tif)$/));
const trgimage = importAll(require.context('./assets/img/targeted', false, /\.(png|jpe?g|svg|tif)$/));
const wkfimage = importAll(require.context('./assets/img/workforce', false, /\.(png|jpe?g|svg|tif)$/));

const images = {...general, ...eduimage, ...incimage, ...infimage, ...prjimage, ...quaimage, ...susimage, ...trgimage, ...wkfimage};
const video = importAll(require.context('./assets/video', false, /\.(mp4)$/));

/**** TABLE OF CONTENTS *****/
/*   1) targetedIndustries  */
/*   2) incentives          */
/*   3) quality             */
/*   4) projects            */
/*   5) sustainability      */
/*   6) workforce           */
/*   7) education           */
/*   8) infrastructure      */

const VenueAPI = {

  /* API FIELDS */
  /* ALL FIELDS ARE LOWERCASE */
  /* REQUIRED FIELDS *//*
  
  Make sure a comma is placed at the end of any fields.

  Fields that are necessary for the page to work -
  
  name - Takes a string (text surrounded with quotes)
  navlink - a string, the shortened name for the subeader.
  url - Takes a string (text surrounded with quotes)
  gradient -  two hex codes [#code1, #code2], for background gradient
  
  /* OPTIONAL FIELDS *//*

  description - Text contained within <p></p> tags
  pageimg - Uses an image in the format images["yourimage.ext"]
  midimg - Uses an image in the format images["yourimage.ext"]. If neither text nor video is provided, description will fill in the slot for it.
  video - Uses an image in the format video["yourvideo.ext"] If neither text nor video is provided, description will fill in the slot for it.
  statistic - format is

              [
                {
                  id: Takes a string, needs to be unique. Doesn't display anything but tracks internally.
                  img: Uses an image in the format images["yourimage.ext"]
                  text: takes a string
                  size: number, is the number of pixels the icon should be (60 is the go to)
                },
                {
                  id: Takes a string, needs to be unique. Doesn't display anything but tracks internally.
                  img: Uses an image in the format images["yourimage.ext"]
                  text: Takes a string
\                 size: number, is the number of pixels the icon should be (60 is the go to)
                }
              ]

  If you added a field and its not working, make sure you added a comma at the end and everything is properly spelled out/capitalized. Typos are the enemy.

  Instead of using an apostrophe, use &apos; - it's best practice.

  */

  homepage: [
      {

        /*comment out imgbackground if using vidbackground or vidbackground if using imgbackground*/
       
        poster: images["orlando_grey.jpg"],
        vidbackground: video["background.mp4"],
        /*imgbackground: images["orlando_grey.jpg"],*/

      }
  ],

  targetedIndustries: [
      
      { name: "Targeted Industries",
        navlink: 'Targeted Industries',
        url: 'targeted-industries', 
        gradient: [ '#FC0D5A', '#900DFC' ],
        description: <p>Orlando is the world capital of Modeling, Simulation & Training (MS&T) and the top producing region for engineers in the Aviation, Aerospace & Defense industry. As the nation’s newest hub for Advanced Manufacturing, Orlando is home to the world’s first international consortium for advanced manufacturing and research. Life Sciences & Healthcare are growing here at exponential rates with more than 92,000 jobs and growing. Orlando’s Innovative Technologies industry, with an ecosystem that includes the Southeast’s largest tech meetup, is comprised to 2,600 companies with an average wage of $70,000.</p>, 
        pageimg: images["OrlandoNightView.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart.png"],
            text: <p>Home to major US operations of more than 150 International Companies.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_briefcase.png"],
            text: <p>Orlando hosts facilities of industry leaders such as Siemens Energy and Mitsubishi.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Innovative Technology",
        navlink: 'Innovative Technology',
        url: 'innovative-technology', 
        gradient: [ '#DB00E5', '#0D4AFF' ],
        description: <p>Home to over 2,000 companies creating technology that shapes all aspects of the economy, Orlando fuses experience with ingenuity. Driven by a superior quality of life, passionate creative culture and high value/low cost of operation, Orlando’s dynamic technology industry continues to propel the innovative economy. This culmination of industry and education has exploded into a burgeoning tech ecosystem with the Southeast’s largest tech meetup group. For more information, visit <a href="http://www.orlandoedc.com/Industries/Innovative-Technologies">here</a>.</p>, 
        pageimg: images["ti_innovativetech.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Advanced Manufacturing",
        navlink: 'Advanced Manufacturing',
        url: 'advanced-manufacturing', 
        gradient: [ '#0D4AFF', '#FDBA0D' ],
        description: <p>Home to over 2,000 companies creating technology that shapes all aspects of the economy, Orlando fuses experience with ingenuity. Driven by a superior quality of life, passionate creative culture and high value/low cost of operation, Orlando’s dynamic technology industry continues to propel the innovative economy. This culmination of industry and education has exploded into a burgeoning tech ecosystem with the Southeast’s largest tech meetup group. For more information, visit <a href="http://www.orlandoedc.com/Industries/Innovative-Technologies">here</a>.</p>, 
        pageimg: images["ti_lockheed.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart.png"],
            text: <p>750 Companies</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_person.png"],
            text: <p>22,200 Employees</p>,
            size: 60,
          }, 
          {
            id: "3",
            img: images["icon_award.png"],
            text: <p>1,900 Annual Graduates</p>,
            size: 60,
          }, 
          {
            id: "4",
            img: images["icon_money.png"],
            text: <p>$1.8 Billion in Annual Payroll</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Corporate Headquarters and Regional Offices",
        navlink: 'Headquarters and Offices',
        url: 'corporate-hq-and-reqional-offices', 
        gradient: [ '#900DFC', '#0DFFF4' ],
        description: <p>Industry leaders like American Automobile Association (AAA), Darden Restaurants, Deloitte Consulting LLP, Electronic Arts, Lockheed Martin, Northrop Grumman, Tupperware Brands Corporation, Verizon Communications and the Walt Disney Company are either headquartered in Orlando or have a significant presence in the city. For more information, visit <a href="http://www.orlandoedc.com/Industries/Corporate-Headquarters-Regional-Offices">here</a></p>, 
        pageimg: images["ti_corporatehq.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Aviation, Aerospace and Defense",
        navlink: 'Aviation, Aerospace and Defense',
        url: 'aviation-aerospace-defense', 
        gradient: [ '#0CE871', '#FC5F0D' ],
        description: <div><p>Known as the Modeling, Simulation and Training (MS&amp;T) capital of the world, Orlando is home to the simulation procurement commands for the Army and Navy and has a significant presence of the Air Force and Marines. In total, more than $4 billion in annual simulation contracts flow through the region, the majority of which is awarded to local companies and subcontractors.</p><p>The region has five airports (including MCO and SFB) with more than 175 non-stop destinations around the world, a new commuter rail system, upcoming statewide rail system, close proximity to major ports (including the world’s only quadramodal port) and strong roadways. All of this connectivity is invaluable for business. For more information, visit <a href="http://www.orlandoedc.com/Industries/Aviation-Aerospace-Defense">here</a></p></div>, 
        pageimg: images["ti_aerospace.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_briefcase.png"],
            text: <p>220 Companies</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_person.png"],
            text: <p>17,600 Employees</p>,
            size: 60,
          }, 
          {
            id: "3",
            img: images["icon_award.png"],
            text: <p>2,400 Annual Graduates</p>,
            size: 60,
          }, 
          {
            id: "4",
            img: images["icon_money.png"],
            text: <p>1.4 Billion in Annual Payroll</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Life Sciences and Healthcare",
        navlink: 'Life Sciences and Healthcare',
        url: 'life-science-and-healthcare', 
        gradient: [ '#FDBA0D', '#FC0D5A' ],
        description: <p>With one of the most rapidly evolving Life Sciences and Healthcare industries in the United States, Orlando has caught the attention of medical innovators and entrepreneurs around the globe. Renowned for its collaborative and entrepreneurial environment anchored in state-of-the-art educational and research facilities, the Orlando region has become the ideal platform to launch groundbreaking medical advances that combat our most pressing health issues. For more information, visit <a href="http://www.orlandoedc.com/Industries/Life-Sciences-Healthcare">here</a></p>, 
        pageimg: images["ti_lifesciences.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_briefcase.png"],
            text: <p>4,800 Companies</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_person.png"],
            text: <p>99,600 Employees</p>,
            size: 60,
          }, 
          {
            id: "3",
            img: images["icon_award.png"],
            text: <p>1,700 Annual Graduates</p>,
            size: 60,
          }, 
          {
            id: "4",
            img: images["icon_money.png"],
            text: <p>$5.9 Billion in Annual Payroll</p>,
            size: 60,
          }, 
        ],
      },
    ],

/***************************************************************************************************/

  incentives: [

      { name: "Incentives and Programs",
        navlink: 'Incentives and Programs',
        url: 'incentives-and-program', 
        gradient: [ 'red', 'orange' ],
        description: <p>The City of Orlando provides incentive programs designed to encourage small business owners and entrepreneurs’ to locate, expand and redevelop in Orlando.</p>, 
        pageimg: images["inc_downtownorlando.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_store.png"],
            text: <p>In fiscal year 2016-2017, the City of Orlando approved incentive agreements with 27 businesses, which resulted in the creation of 343 jobs and more than $441 in capital investment</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_money.png"],
            text: <p>In fiscal year 2016-2017, the City of Orlando approved incentive agreements with 47 businesses, which resulted in the creation of 583 jobs and more than $443 million in capital investment.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Business Assistance Program",
        navlink: 'Business Assistance',
        url: 'business-assistance-program', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>The Business Assistance Program (BAP) is a matching grant program designed to encourage small businesses to locate, expand, or redevelop in the City. BAP provides matching funds to new and expanding businesses in the City to assist in off-setting development fees, including sewer and transportation impact fees, building permit fees, and all elements of public right-of-way infrastructure within the City’s jurisdiction that may require new installation, repair, replacement, or relocation. For more information, visit <a href="http://www.cityoforlando.net/business-development/business-assistance-program/">here</a></p>, 
        pageimg: images["inc_infusiontea.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_money.png"],
            text: <p>The Business Assistance Program pays 50% of fees assessed against a project up to 20%.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Small Business Façade Program, Site Improvement and Adaptive Reuse Program",
        navlink: 'Business Façade Program',
        url: 'small-business-facade-program', 
        gradient: [ 'yellow', 'green' ],
        description: <p>The Small Business Façade, Site Improvement and Adaptive Reuse Program (FSARP) is designed to revitalize business corridors and abandoned buildings within the City limits through funding for building façade, site improvements, and/or building reuse improvements (“Award”). The goal of the FSARP is to preserve our history, contribute to our economic vitality by promoting small business and to cultivate vibrant neighborhood business corridors. The FSARP is designed as a forgivable loan program. Awards made to properties will encourage reuse of vacant or underutilized properties, improve appearance, and support the long-term viability of the City. Over time, the taxable valuation of the improved properties will increase, thus increasing the amount of funds available to revitalize the City. For qualifying projects, the City of Orlando will provide a 10-year, 50% real property tax refund on the city portion of the new tax increment generated by the project. For more information, <a href="http://www.cityoforlando.net/business-development/small-business-facade-program/">here</a>.</p>, 
        pageimg: images["inc_inbloomflorist.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart2.png"],
            text: <p>Under the program, the City of Orlando will reimburse 50% of the total project costs.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Not-For-Profit Fee Assistance Program",
        navlink: 'Fee Assistance Program',
        url: 'not-for-profit-fee-assistance-program', 
        gradient: [ 'yellow', 'green' ],
        description: <p>The Non-Profit Impact Fee Assistance Program provides impact fee assistance to non-profit agencies, located within the City of Orlando, that undertake construction projects. Eligible costs include transportation and sewer impact fees that have been assessed by the City for the construction project. For more information, visit <a href="http://www.cityoforlando.net/business-development/profit-impact-fee-assistance-program/">here</a>.</p>, 
        pageimg: images["construction.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_money.png"],
            text: <p>Under this program, the City of Orlando provides 50% of impact fees assessed against a project up to $50,000.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Transportation Impact Fee Waiver",
        navlink: 'Transportation Impact',
        url: 'transportation-impact-fee-waiver', 
        gradient: [ 'green', 'blue' ],
        description: <p>As part of the Mayors Initiatives to support the city’s small businesses, Mayor Dyer and the Orlando City Council adopted a Change of Use incentive program in April 2011, to help small businesses grow in a slow economic environment. Under this program any new business proposing to occupy a vacant building or unit may receive a waiver of up to $20,000, towards their <a href="http://www.cityoforlando.net/economic/impact-fees/">transportation impact fee assessment</a>.</p>, 
        pageimg: images["CFEX.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Downtown Façade and Building Stabilization",
        navlink: 'Building Stabilization',
        url: 'downtown-facade-and-building-stabilization', 
        gradient: [ 'blue', 'indigo' ],
        description: <p>Building appearance plays an important role in creating the image of Downtown. Funding for building façade and/or building stabilization improvements (“Grant”) made to properties will encourage reuse of vacant or underutilized properties, improve appearance, and support the long-term viability of Downtown Orlando. Over time, the taxable valuation of the improved properties will increase, thus increasing the amount of funds available to revitalize Downtown Orlando. For more information, visit <a href="http://www.cityoforlando.net/business-development/incentive-programs/">here</a></p>, 
        pageimg: images["inc_quantumleap.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Minority/Women Entrepreneur Business Assistance Program",
        navlink: "MWBE",
        url: 'MWBE', 
        gradient: [ 'indigo', 'violet' ],
        description: <p>The Minority/Women Entrepreneur Business Assistance (MEBA) Program is a financial assistance program that was established to retain existing minority-owned businesses located within the target area and to attract new minority-owned businesses to this area. The MEBA Program Target Area is generally bounded by West Colonial Drive, South Westmoreland Drive, West Gore Street and Interstate-4. For more information, visit <a href="http://www.cityoforlando.net/business-development/incentive-programs/">here</a>.</p>, 
        pageimg: images["DowntownOrlando.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Orlando Economic Enhancement District",
        navlink: "Economic Enhancement",
        url: 'orlando-economic-enhancement-district', 
        gradient: [ 'violet', 'red' ],
        description: <p>The Orlando Economic Enhancement District Program (OEED) is a State of Florida economic development tool encouraging redevelopment of properties by businesses and property owners. OEED is a brownfield designation and includes sites that have the perception of contamination or blight. For more information, visit <a href="http://www.cityoforlando.net/business-development/incentive-programs/">here</a>.</p>, 
        pageimg: images["CollegeParkCoffee.jpg"],
        statistic: [
       
        ],
      },
    /***********************/
      { name: "Qualified Target Industry Tax Refund Program",
        navlink: 'Target Industry Tax Refund',
        url: 'qualified-target-industry-tax-refund-program', 
        gradient: [ 'red', 'orange' ],
        description: <p>The Qualified Target Industry Tax Refund Program (QTI) is a tool available through the State of Florida Department of Economic Opportunity (DEO) to encourage quality job growth to targeted growth industries. This program supports the City’s efforts to diversify the Orlando economy. For more information, visit <a href="http://www.cityoforlando.net/business-development/qualified-target-industry-program/">here</a>.</p>, 
        pageimg: images["CFEX3.png"],
        statistic: [
          
        ],
      },
    /***********************/
      { name: "Economic Development Transportation Fund",
        navlink: 'Economic Development',
        url: 'economic-development-transportation-fund', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>The Economic Development Transportation Fund, otherwise known as the “Road Fund”, offers up to $2 million in grants through the State of Florida to alleviate transportation challenges that impact the location or expansion of headquarter operations or manufacturing/recycling facilities. For more information, visit <a href="http://www.cityoforlando.net/business-development/economic-development-transportation-fund/">here</a>.</p>, 
        pageimg: images["inf_streetdrawings-2.jpg"],
        statistic: [
    
        ],
      },
    /***********************/
      { name: "Urban Job Tax Credit Program",
        navlink: "Tax Credit Program",
        url: 'urban-job-tax-credit-program', 
        gradient: [ 'yellow', 'red' ],
        description: <p>The Urban Job Tax Credit Program provides tax credits to eligible businesses that are located within the one of the 13 urban areas designated by the State of Florida Department of Economic Opportunity (DEO). This credit ranges from $500 to $2,000 per qualified job and can be taken against the Florida Corporate Income Tax or the Florida Sales and Use Tax. A total of $5 million of tax credits may be approved under the UJTCP each calendar year. For more information, visit <a href="http://www.cityoforlando.net/business-development/urban-job-tax-credit-program/">here</a>.</p>, 
        pageimg: images["BusStop.jpg"],
        statistic: [
      
       ],
      },
    /***********************/
      { name: "Targeted Site Revitalization Pilot Program",
        navlink: "Revitalization Program",
        url: 'revitalization-pilot-program', 
        gradient: [ 'red', 'indigo' ],
        description: <p>The Targeted Site Revitalization Pilot Program is designed to foster the redevelopment of catalytic sites throughout the City of Orlando that have experienced abandonment, blight and/or disinvestment. This program aims to encourage private sector investments in underutilized properties in order to improve the local economy and quality of life in surrounding areas. For qualifying projects, the city will provide a 10 year, 50% real property tax refund for on the city portion of the new tax increment generated by the project. for more information, <a href="http://www.cityoforlando.net/business-development/incentive-programs/targeted-site-revitalization-pilot-program/">click here</a>.</p>, 
        pageimg: images["BusStop.jpg"],
        statistic: [
   
        ],
      },
    ],

/***************************************************************************************************/

  quality: [

      { name: "Quality of Life",
        navlink: 'Quality of Life',
        url: 'quality-of-life', 
        gradient: [ 'red', 'orange' ],
        description: <p>"Quality of life." In Orlando, these are words to live by. With more than 4,000 square miles, the Orlando region offers irresistible lifestyle options for virtually everyone.</p>, 
        midimg: images["qua_LakeEolaSculpture.jpg"],
        pageimg: images["qua_Paddleboard.jpg"],
        statistic: [
     
        ],
      },
    /***********************/
      { name: "Arts and Culture",
        navlink: 'Arts and Culture',
        url: 'arts-and-culture', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>In Orlando, you'll never run out of things to do. The same ideals of creativity and innovation that rank Orlando's theme parks among the best in the world overflow to the surrounding community, making this a haven for artists and performers. From the intimate Orlando Repertory Theatre and Mad Cow Theatre to the Broadway Across America Orlando series, the entertainment options are endless. And can we mention, the area is also home to hundreds of museums, galleries, theatres, gardens and historic homes. <a href="http://orlandoedc.com/Live-Play-Visit/Arts-Culture.aspx">Visit here for more information.</a></p>, 
        pageimg: images["qua_DrPhillips.jpg"],
        statistic: [
   
        ],
      },
    /***********************/
      { name: "Sports and Entertainment",
        navlink: "Sports and Entertainment",
        url: 'sports-and-entertainment', 
        gradient: [ 'yellow', 'green' ], 
        description: <p>Orlando ranks 5th best city in the U.S. for an active lifestyle according to WalletHub. The region has a multitude of sports and recreation options with more than 100 top-rated golf courses, miles and miles of walking and cycling trails and triathlon certified training at the National Training Center where Olympians also happen to train. In 2016, Orlando became the “new home of American tennis” with the United States Tennis Association building more than 100 tennis courts. <a href="http://orlandoedc.com/Live-Play-Visit/Sports-Recreation.aspx">Click here</a> for more information.</p>, 
        pageimg: images["qua_SportsEntertainment.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Housing",
        navlink: "Housing",
        url: 'housing', 
        gradient: [ 'green', 'blue' ],
        description: <div><p>Orlando leads the way in terms of variables such as housing starts; growth in population, employment and resident income; mortgage lending; building permits; new-home sales; and home prices. On the strength of those factors, housing availability, affordability and diversity are widely apparent. Homeowners save significantly by living in Orlando.</p><p>As for diversity, housing options and neighborhoods span a broad spectrum, from an urban setting in downtown Orlando to the rolling hills of Lake County. Houses in every description — from one-bedroom condo units to multi-acre estates — are plentiful. <a href="http://orlandoedc.com/Live-Play-Visit/Housing.aspx">Click here</a> for more information.</p></div>, 
        pageimg: images["qua_housing.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_house.png"],
            text: <p>35% of city residents are homeowners, compared to 65% who are renters.</p>,
            size: 60,
          },
          {
            id: "2",
            img: images["icon_money.png"],
            text: <p>The Orlando median home price is $10,000 lower than the national median.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Leading Hospitals",
        navlink: 'Leading Hospitals',
        url: 'leading-hospitals', 
        gradient: [ 'blue', 'indigo' ],
        description: <p>Healthcare in Orlando is comprehensive, with internationally recognized programs in cardiology, cancer, women’s medicine, neurology, diabetes, orthopedics and rehabilitation. According to the American Hospital Association, two of the nation’s largest healthcare systems, highlighted below, are headquartered in Orlando. <a href="http://orlandoedc.com/Live-Play-Visit/Healthcare.aspx">Click here</a> for more information.</p>, 
        pageimg: images["qua_orlandohealth2.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Parks and Receation",
        navlink: 'Parks and Rec',
        url: 'parks-and-recreation', 
        gradient: [ 'indigo', 'violet' ],
        description: <p>Orlando has 115 locations to serve you throughout the City, including 83 Parks, 17 Neighborhood centers, two senior centers, seven After-School All-Star locations, four special facilities and two trails. <a href="http://www.cityoforlando.net/fpr/">Visit here</a> for more information.</p>, 
        midimg: images["qua_parks2.jpg"],
        pageimg: images["qua_ParkoftheAmericas.jpg"],
        statistic: [

        ],
      },
    ],

/***************************************************************************************************/

  projects: [

      { name: "Hot Projects",
        navlink: 'Hot Projects',
        url: 'hot-projects', 
        gradient: [ 'red', 'orange' ],
        description: <p>Major developments such as these are drivers that assist the City in diversifying our economy, improve our quality of life and create employment opportunities for our residents.  These developments are where <strong>Potential Meets Opportunity!</strong></p>, 
          /*video: video["background.mp4"],*/
        pageimg: images["prj_VAHospital.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Lake Nona",
        navlink: 'Lake Nona',
        url: 'lake-nona', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>Lake Nona is a flourishing, innovative community focused on sustainable design, healthy living and groundbreaking biotechnology and life sciences practices. For more information, visit <a href="http://www.lakenona.com">lakenona.com</a>.</p>, 
        /*video: video["background.mp4"],*/
        pageimg: images["lakenona.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Lake Nona Medical City",
        navlink: 'Medical City',
        url: 'lake-nona-medical-city', 
        gradient: [ 'yellow', 'green' ],
        description: <p>The 650-acre Lake Nona Medical City is a landmark for Orlando and a premier location for medical care, research and education. Medical City is home to tenants including the University of Central Florida Health Sciences Campus, VA Medical Center, Nemours Children’s Hospital and more. For more information, visit <a href="http://www.lakenona.com/health/medical-city">here</a>.</p>, 
        pageimg: images["prj_MedicalCity.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Creative Village",
        navlink: 'Creative Village',
        url: 'creative-village', 
        gradient: [ 'green', 'blue' ],
        description: <p>The 68-acre Creative Village in downtown Orlando will be anchored by the University of Central Florida and Valencia College downtown campus, student housing, office spaces, a dynamic mix of restaurants, public art and walkable open spaces and parks. For more information, visit <a href="http://www.cityoforlando.net/economic/creative-village">here</a>.</p>,
        pageimg: images["prj_CreativeVillage2.jpg"],
        statistic: [

        ],
      },
    ],

/***************************************************************************************************/

  sustainability: [

      { name: "Sustainability",
        navlink: 'Sustainability',
        url: 'sustainability', 
        gradient: [ 'red', 'orange' ],
        description: <p>Orlando is paving the way for a more eco-friendly and sustainable future. In fact, Orlando is ranked as one of the greenest cities in America by EcoWatch. Orlando is a top city for urban farming (Redfin 2016) and is one of only five cities awarded the Smart City Council Readiness Challenge grant in 2017.</p>, 
        pageimg: images["sus_sustainability2.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Smart City of the Future",
        navlink: 'Smart City',
        url: 'smart-city-of-the-future', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>As part of the 2017 Smart City Council Readiness Challenge, Orlando will receive hands on guidance from the Smart Cities Council, a network of leading companies advised by top universities, laboratories, and standards bodies, to develop a comprehensive smart city plan. Orlando and Orange County plan to implement smart transportation solutions that can enhance the visitor experience while improving safety and reducing congestion, including the integration of sensors and advanced communications systems into public safety programs. For more information, visit here.</p>, 
        pageimg: images["sus_SmartCity.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Greenworks Orlando",
        navlink: 'Greenworks',
        url: 'greenworks-orlando', 
        gradient: [ 'yellow', 'green' ],
        description: <p>The City of Orlando is working to be one of the most sustainable cities in America through implementing its Green Works Community Action Plan. This plan identifies ambitious goals and actionable strategies in seven distinct focus areas that ensure protection of its natural resources and a thriving, livable city for current and future residents. For more information, visit <a href='http://www.cityoforlando.net/greenworks'>Greenworks Orlando</a>.</p>, 
        pageimg: images["sus_Greenworks.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Circular Economy",
        navlink: 'Circular Economy',
        url: 'circular-economy', 
        gradient: [ 'green', 'blue' ],
        description: <p>Orlando is the testing grounds for a scalable model designed to improve recycling and recovery rates. Orlando was chosen this year by the U.S. Chamber of Commerce Foundation as the pilot city for its Beyond 34 project. Beyond 34 is a first-of-its-kind public-private sector partnership to help break through the current national recycling barrier of 34 percent. For more information, visit <a href="http://www.uschamberfoundation.org/beyond-34-recycling-and-recovery-new-economy">here</a>.</p>, 
        pageimg: images["sus_CircularEconomy.jpg"],
        midimg: images["sus_DSC_6120.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Slow Food and Farming Movement",
        navlink: 'Slow Food and Farming',
        url: 'slow-food-and-farming-movement', 
        gradient: [ 'blue', 'indigo' ],
        description: <p>Orlando has developed a unique and progressive urban farming movement. Ranked in the top five best cities for urban farming, several Orlando organizations are working to reshape the city’s food system, including Fleet Farming and Growing Orlando. For more information, visit <a href="http://cityoforlando.net/greenworks/food-systems/">here</a>.</p>, 
        pageimg: images["sus_sustainability.jpg"],
        statistic: [

        ],
      },
    ],

/***************************************************************************************************/

  workforce: [

      { name: "Workforce",
        navlink: 'Workforce',
        url: 'workforce', 
        gradient: [ 'red', 'orange' ],
        description: <div><p>Orlando boasts a young, well-educated and diverse workforce with more than 1.2 million people. Not coincidentally, the region is at, or near, the top of national charts in several demographic and labor-related categories.</p><p>With a strong talent pipeline of more than 500,000 students within a 100 mile radius, Orlando is among the nation's fastest-growing population and employment markets, ensuring a strong and stable labor pool for a community that is expected to remain among the nation's top growing metropolitan areas well into the future. <a href="http://www.orlandoedc.com/Locate-Expand/Workforce.aspx">Visit here</a> for more information.</p></div>, 
        pageimg: images["techjobs.jpg"],
        statistic: [

        ],
      },
    ],

/***************************************************************************************************/

  education:[

    /***********************/
      { name: "Education",
        navlink: 'Education',
        url: 'education', 
        gradient: [ 'red', 'orange' ],
        description: <p>Preparing students at all stages to serve as Orlando’s workforce of tomorrow is a top priority as educators committed to excellence work in partnership with parents, teachers, administrators and community leaders to create innovative curriculum and programs, starting as young as the Pre-Kindergarten level.</p>, 
        pageimg: images["edu_famu1.jpg"],
        /*video: video["background.mp4"],*/
        statistic: [
          {
            id: "1",
            img: images["icon_person.png"],
            text: <p>There are more than 35 colleges, universities, technical schools and private institutions in the Orlando region.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "University of Central Florida",
        navlink: 'UCF',
        url: 'university-of-central-florida', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>With more than 60,000 students, UCF is the second largest university in the nation. Maybe even more important is the school’s growing reputation as a top metropolitan research university, and its focus on meeting the needs of the local business community. <a href="http://orlandoedc.com/Live-Play-Visit/Education/Universities-Colleges.aspx">Click here</a> for more information.</p>, 
        pageimg: images["edu_ucf1.jpg"],
        midimg: images["edu_ucf2.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_person.png"],
            text: <p>UCF has a populaion of more than 60,000 students and more than 200 degree programs.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_book.png"],
            text: <p>UCF is the country&apos;s second largest university.</p>,
            size: 60,
          },  
        ],
      },
    /***********************/  
      { name: "Valencia College",
        navlink: 'Valencia',
        url: 'valencia-college',
        gradient: [ 'yellow', 'green' ], 
        description: <p>Valencia College operates six campuses and centers in Central Florida&apos;s Orange and Osceola counties. Joint University of Central Florida-Valencia buildings on two campuses offer 15 UCF undergraduate degrees as well as Valencia&apos;s own bachelor&apos;s programs in Radiologic and Imaging Sciences and Electrical and Computer Engineering Technology. The college offers a two-year A.A. parallel program that prepares students to transfer to an upper-division college or university; college-preparatory courses that help first-year students excel; and technical programs and continuing education courses that prepare students to meet the needs of business and industry. <a href="http://orlandoedc.com/Live-Play-Visit/Education/Universities-Colleges.aspx">Click here</a> for more information.</p>,
        pageimg: images["edu_valencia.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_money.png"],
            text: <p>Valencia&apos;s economic impact to the central Florida region is more than $1 billion a year.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_book.png"],
            text: <p>One out of four UCF graduates started at Valencia.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Full Sail University", 
        navlink: 'Full Sail',
        url: 'full-sail-university',
        gradient: [ 'green', 'blue' ], 
        description: <p>Full Sail University is an award-winning educational leader for those pursuing careers in the entertainment and media industry. Founded in 1979, Full Sail offers on-campus and online master&apos;s, bachelor&apos;s, and associate&apos;s degree programs in areas related to animation, art, business, education, graphic design, film, marketing, web development, music, recording arts, sports, and video games. <a href="http://orlandoedc.com/Live-Play-Visit/Education/Universities-Colleges.aspx">Click here</a> for more information.</p>,
        pageimg: images["edu_fullsail2.jpg"],
        midimg: images["edu_fullsail1.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_award.png"],
            text: <p>At the 59th Annual GRAMMY Awards, 41 Full Sail graduates were credited on 46 artist releases across 36 categories.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_award.png"],
            text: <p>At the 89th Annual Academy Awards, 28 Full Sail graduates were credited on films nominated in the Motion Picture of the Year category.</p>,
            size: 60,
          }, 
          {
            id: "3",
            img: images["icon_award.png"],
            text: <p>Full Sail was named "One of the Best Music Schools" in 2018 in Tune Monthly Magazine.</p>,
            size: 60,
          }, 
          {
            id: "4",
            img: images["icon_book.png"],
            text: <p>Full Sail was named one of the "Top Schools to Study Game Design" in 2017 by The Princeton Review.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Florida Interactive Entertainment Academy",
        navlink: 'FIEA',
        url: 'florida-interactive-entertainment-academy',
        gradient: [ 'blue', 'indigo' ],
        description: <p>Florida Interactive Entertainment Academy is a place for dreamers and doers. A place where productivity and ingenuity are applauded in equal measure. Being a part of FIEA means you’re an artist, programmer, tech artist or producer wanting to make tomorrow’s great game or tell a story never told before. <a href="https://fiea.ucf.edu/">Click here</a> for more information.</p>,
        pageimg: images["edu_FIEAUCF.jpg"],
        midimg: images["edu_fiea2.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_award.png"],
            text: <p>In 2018, FIEA, UCF's graduate game development program, was ranked 3rd on The Princeton Review's "Top 25 Graduate Schools for Game Design" in the world.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Orange County Public Schools’ Orange Technical College",
        navlink: 'Orange Technical College',
        url: 'orange-county-public-schools-orange-technical-college', 
        gradient: [ 'indigo', 'purple' ],
        description: <p>Throughout five technical college campuses and numerous community learning centers, Orange Technical College teaches the industry skills needed to start a whole new career through industry certifications/licensures, become an apprentice, learn English, attain your high school diploma or expand current skills. <a href="http://orlandoedc.com/Live-Play-Visit/Education/Technical-Schools.aspx">Click here</a> for more information.</p>, 
        pageimg: images["edu_orlandotechcollege2.jpg"],
        midimg: images["edu_orlandotechcollege.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_money.png"],
            text: <p>Orange Technical College has created more than $181.5 million in total economic impact. The college benefits local businesses by increasing consumer spending.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Florida Agriculture and Mechanical University College of Law",
        navlink: 'Florida A&M College of Law',
        url: 'florida-a-and-m-university-college-of-law', 
        gradient: [ 'purple', 'red' ],
        description: <p>FAMU values diversity in thought, perspective, and culture. The University enrolls nearly 10,000 students hailing from across the United States and more than 70 countries, including several African countries, the Bahamas, Brazil, Indonesia, China, and the United Arab Emirates, to name a few. The student body includes representatives from all ethnic, socio-economic, and religious backgrounds. <a href="http://www.famu.edu/">Click here</a> for more information.</p>,
        pageimg: images["edu_famu2.jpg"],
        midimg: images["edu_famu3.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_person.png"],
            text: <p>FAMU Law graduates are serving their community at large firms, businesses and governmental agencies such as Morgan & Morgan, P.A., Holland & Knight, LLP, Verizon Communications, Lockheed Martin, Office of the State Attorney and the Internal Revenue Service</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "K-12 Schools",
        navlink: 'K-12 Schools',
        url: 'k-12-schools', 
        gradient: [ 'red', 'orange' ],
        description: <p>The four K-12 school districts in the Orlando region – Lake County Schools, Orange County Public Schools, Osceola County School District and Seminole County Public Schools – are high-performing and award-winning with numerous accolades received including the Broad Prize for Urban Education (OCPS) and are routinely named to lists like “Most Connected,” “Best High School” and “Top of the Class.” Each district has innovative magnet programs as well as a focus on Advanced Placement and dual enrollment, STEM and robotics (as early as Kindergarten), unique arts schools and personalized learning approaches. <a href="http://orlandoedc.com/Live-Play-Visit/Education/K-12-Schools.aspx">Click here</a> for more information.</p>,
        pageimg: images["edu_elementaryschool.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_book.png"],
            text: <p>Seventeen of Orange County high schools have been named "Top of the Class" by the <i>Washington Post</i>.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_chart2.png"],
            text: <p>The Orange County school system is the 10th largest in the nation and is the fourth largest in Florida.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_pen.png"],
            text: <p>Three Seminole County high schools – Lyman High School, Seminole High School and Crooms Academy of Information Technology – are featured as a "Best High School" by U.S. News & World Report.</p>,
            size: 60,
          }, 
        ],
      },
    ],

/***************************************************************************************************/

  infrastructure: [

      { name: "SunRail",
        navlink: 'SunRail',
        url: 'sunrail', 
        gradient: [ 'red', 'orange' ],
        description: <p>SunRail is Orlando’s commuter rail line, featuring 17 stations and more than 61 miles of track serving the City of Orlando, Volusia, Seminole and Orange County. For more information, visit <a href="http://www.sunrail.com">sunrail.com</a>.</p>, 
        pageimg: images["inf_SunRail_Train.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart2.png"],
            text: <p>SunRail stretches 31 miles from Debary, the north end of the Orlando region, to south Orange County on Sand Lake Road.</p>,
            size: 60,
          },
          {
            id: "2",
            img: images["icon_briefcase.png"],
            text: <p>SunRail currently runs 34 train trips per day, Monday through Friday.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "LYNX",
        navlink: 'LYNX',
        url: 'lynx', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>LYNX, Orlando’s public transit provider, covers more than 2,500 square miles extending through Orange, Seminole and Osceola counties. LYNX provides regularly scheduled bus service to 61 routes on comfortable buses equipped with bike racks. For more information, visit <a href="http://golynx.com">golynx.com</a>.</p>, 
        pageimg: images["inf_Lynx.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_briefcase.png"],
            text: <p>LYNX has a total fleet of more than 300 air-conditioned coaches.</p>,
            size: 60,
          },
          {
            id: "2",
            img: images["icon_weather.png"],
            text: <p>LYNX uses nearly 3.6 million gallons of bio-friendly fuel per year. LYNX particle emissions are less than 15 ppi (Producer Price Index) per year on a scale of 100.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "LYMMO",
        navlink: 'LYMMO',
        url: 'lymmo', 
        gradient: [ 'yellow', 'green' ],
        description: <p>LYMMO is Orlando’s Bus Rapid Transit service with its own dedicated lane. LYMMO controls stoplights throughout its three-mile route so riders can easily get to their destination. For more information, visit <a href="https://www.golynx.com/plan-trip/riding-lynx/lymmo/">here</a>.</p>, 
        pageimg: images["inf_Lymmo.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart2.png"],
            text: <p>LYMMO is completely free to riders. LYMMO is funded through the City of Orlando&apos;s Downtown Development Board and Parking Division.</p>,
            size: 60,
          },
        ],
      },
    /***********************/
      { name: "Car Share",
        navlink: 'Car Share',
        url: 'car-share', 
        gradient: [ 'green', 'blue' ],
        description: <p>Zipcar, the world’s leading car sharing network, offers residents, businesses, visitors and students an affordable, convenient and sustainable transportation option in Orlando. Cars are available to rent by the hour or day. For more information, visit <a href="http://downtownorlando.com/getting-around/carshare/">here</a>.</p>, 
        pageimg: images["inf_carshare1.jpg"],
        midimg: images["inf_carshare2.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart2.png"],
            text: <p>By creating an account with Zipcar, customers receive a Zipcard that will unlock Zipcars located throughout the city 24 hours a day.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "I-4 Ultimate",
        navlink: 'I-4 Ultimate',
        url: 'i-4-ultimate', 
        gradient: [ 'blue', 'indigo' ],
        description: <p>A whole new I-4 is coming to Central Florida. Often called the backbone of our transportation system, I-4 is being completely transformed along the 21 miles that stretch from Kirkman Road to State Road 434. <a href="https://i4ultimate.com/project-info/overview/">Click here</a> for more information.</p>, 
        pageimg: images["i4.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_weather.png"],
            text: <p>I-4 is getting a 21-mile makeover that will connect the Gulf of Mexico to the Atlantic Ocean.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Central Florida Expressway Authority",
        navlink: 'Expressway Authority',
        url: 'central-florida-expressway-authority', 
        gradient: [ 'indigo', 'violet' ],
        description: <p>The Central Florida Expressway Authority is responsible for construction, maintenance and operation of toll roads in four counties of Greater Orlando. <a href="https://www.cfxway.com/">Click here</a> for more information.</p>, 
        pageimg: images["CFEX4.jpg"],
        statistic: [
 
        ],
      },
    /***********************/
      { name: "Complete Streets",
        navlink: 'Complete Streets',
        url: 'complete-streets', 
        gradient: [ 'violet', 'red' ],
        description: <p>MetroPlan Orlando plans, supports, and advances the region’s network of Complete Streets. Complete Streets are streets that are planned, designed, constructed, operated, and maintained to safely and comfortably accommodate people of all ages and abilities. That includes pedestrians, cyclists, transit users, motorists, and freight and service operators. <a href="https://metroplanorlando.org/programs-resources/complete-streets/">Click here</a> for more information.</p>, 
        pageimg: images["CFEX2.jpg"],
        statistic: [

        ],
      },
    /***********************/
      { name: "Bike Trails",
        navlink: 'Bike Trails',
        url: 'bike-trails', 
        gradient: [ 'red', 'orange' ],
        description: <p>“The City of Orlando trail network consists of more than 40 miles and offers a combination of off-street paths and asphalt and concrete sections. There are five main trails within the City of Orlando, including Cady Way, Lake Underhill, Orlando Southeast, Orlando Urban and Shingle Creek. For more information, visit <a href="http://cityoforlando.net/transportation-planning/orlando-trails">here.</a></p>, 
        pageimg: images["inf_biketrails.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_chart2.png"],
            text: <p>The City of Orlando has 361.54 miles of bikeways, 40.5 miles of bike paths and 53.4 miles of signed routes.</p>,
            size: 60,
          }, 
        ],
      },
    /***********************/
      { name: "Juice Bike Share",
        navlink: 'Juice Bike Share',
        url: 'juice-bike-share', 
        gradient: [ 'orange', 'yellow' ],
        description: <p>Juice Bike Share is Orlando’s short-term bicycle rental program, designed to provide residents, tourists and commuters with an additional transportation option that is affordable and eco-friendly. For more information, visit <a href="http://juicebikeshare.com">juicebikeshare.com</a>.</p>, 
        pageimg: images["inf_bikeshare.jpg"],
        statistic: [
        
        ],
      },
    /***********************/
      { name: "Orlando International Airport",
        navlink: 'International Airport',
        url: 'orlando-international-airport', 
        gradient: [ 'yellow', 'green' ],
        description: <div><p>Orlando International Airport (MCO) offers more flights to more places than any other airport in Florida. In fact, Orlando International Airport provides non-stop service to more major U.S. destinations than most other cities in the nation. With more than 43 million annual passengers, <a href="https://www.orlandoairports.net/">Orlando International Airport</a> is the 2nd busiest airport in Florida and 14th busiest in the nation.</p><p>Conveniently located only three miles from Downtown Orlando, the business and financial center of Central Florida, Orlando Executive Airport (OEA) is the perfect flight path for the corporate traveler. OEA provides 24-hour service through two fixed base operators, an FAA air traffic control tower and full ILS capability. <a href="https://www.orlandoairports.net/orlando-executive-airport/">Click here</a> for more information.</p></div>, 
        pageimg: images["OIA2.jpg"],
        statistic: [
          {
            id: "1",
            img: images["icon_award.png"],
            text: <p>MCO ranks as the No. 1 busiest airport in Florida.</p>,
            size: 60,
          }, 
          {
            id: "2",
            img: images["icon_chart2.png"],
            text: <p>MCO is the 13th busiest airport in the U.S. and 43rd busiest in the world.</p>,
            size: 60,
          }, 
          {
            id: "3",
            img: images["icon_briefcase.png"],
            text: <p>More than 44 million passengers were served in 2017 and the airport handled over 220,025 tons of cargo in 2017.</p>,
            size: 60,
          }, 
        ],
      },      
    /***********************/
      { name: "Port Canaveral",
        navlink: 'Port Canaveral',
        url: 'port-canaveral', 
        gradient: [ 'green', 'blue' ],
        description: <p>Port Canaveral and the Atlantic Ocean are within an hour’s drive from downtown Orlando, putting European, North American and South American markets at our gateway. Port Canaveral serves four million cruise passengers and five and a half tons of cargo through its state-of-the-art terminals, making it the second busiest cruise, cargo and naval facility in the world. 80 percent of the port’s revenue is generated by cruise lines, with visitors traveling from all over to enjoy both a cruise vacation and Orlando’s many other attractions. For more information, visit <a href="http://portcanaveral.com">here</a>.</p>, 
        pageimg: images["inf_CapeCanaveral.jpg"],
        statistic: [
     
        ],
      },   
    /***********************/
      { name: "Cape Canaveral Spaceport",
        navlink: 'Spaceport',
        url: 'cape-canaveral-spaceport', 
        gradient: [ 'blue', 'indigo' ],
        description: <p>A short drive from Orlando, the Cape Canaveral Spaceport, a multi-use spaceport is the nation’s only human launch center and current site of Blue Origin, Boeing, SpaceX, Lockheed Martin and Space Florida.</p>, 
        pageimg: images["inf_KennedySpaceCenter.jpg"],
        midimg: images["inf_Nasa.jpg"],
        statistic: [

        ],
      },   
    /***********************/
      { name: "Brightline",
        navlink: 'Brightline',
        url: 'brightline', 
        gradient: [ 'indigo', 'violet' ],
        description: <p>Brightline, All Aboard Florida’s intercity express train service, allows people to travel easily and comfortably from Miami to Orlando International Airport in just three hours. For more information, visit <a href="http://www.allaboardflorida.com">allaboardflorida.com.</a></p>, 
        pageimg: images["brightline.jpg"],
        statistic: [

        ],
      },   

    ],

/***************************************************************************************************/

partners: [

      { name: "Partner Agencies",
        navlink: 'Partner Agencies',
        url: 'partner-agencies', 
        gradient: [ 'red', 'orange' ],
        pageimg: images["OrlandoBridge.jpg"], 
        statistic: [
          {
            id: "1",
            img: images["OEP.png"],
            text: <p><a href="http://www.orlandoedc.com/">Orlando Economic Partnership</a></p>,
            size: 180,
          }, 
          {
            id: "2",
            img: images["BBIF.jpeg"],
            text: <p><a href="https://bbifflorida.com/">Black Busines Investment Fund</a></p>,
            size: 180,
          }, 
          {
            id: "3",
            img: images["CFSC.jpg"],
            text: <p><a href="http://www.centralfloridasports.org/">Central Florida Sports Commission</a></p>,
            size: 180,
          }, 
          {
            id: "4",
            img: images["Prospera.png"],
            text: <p><a href="https://prosperausa.org/">Prospera</a></p>,
            size: 180,
          }, 
          {
            id: "5",
            img: images["myregion.jpg"],
            text: <p><a href="http://www.myregion.org/">MyRegion.org</a></p>,
            size: 180,
          }, 
          {
            id: "6",
            img: images["NCS.png"],
            text: <p><a href="https://www.simulationinformation.com/">National Center for Simulation</a></p>,
            size: 130,
          }, 
          {
            id: "7",
            img: images["NEC.jpg"],
            text: <p><a href="http://www.nationalec.org/">National Entrepeneur Center</a></p>,
            size: 180,
          }, 
          {
            id: "8",
            img: images["SBA.png"],
            text: <p><a href="https://www.sba.gov/">Small Business Administration</a></p>,
            size: 180,
          }, 
          {
            id: "9",
            img: images["UCFBIP.jpg"],
            text: <p><a href="https://incubator.ucf.edu/">UCF Business Incubation Program</a></p>,
            size: 200,
          }, 
        ],
      },
  ],

/***************************************************************************************************/

  all: function(target) { 
    switch(target){
      default:
        return false
      case 'targetedIndustries':
        return this.targetedIndustries
      case 'incentives':
        return this.incentives
      case 'quality':
        return this.quality
      case 'projects':
        return this.projects
      case 'sustainability':
       return this.sustainability
      case 'workforce':
        return this.workforce
      case 'education':
        return this.education
      case 'infrastructure':
        return this.infrastructure
      case 'partners':
        return this.partners
      }
  },

  get: function(id, target) {
    const isThing = v => v.url === id
    switch(target){
      default:
        return false
      case 'targetedIndustries':
        return this.targetedIndustries.find(isThing)
      case 'incentives':
        return this.incentives.find(isThing)
      case 'quality':
        return this.quality.find(isThing)
      case 'projects':
        return this.projects.find(isThing)
      case 'sustainability':
        return this.sustainability.find(isThing)
      case 'workforce':
        return this.workforce.find(isThing)
      case 'education':
        return this.education.find(isThing)
      case 'infrastructure':
        return this.infrastructure.find(isThing)
      case 'partners':
        return this.partners.find(isThing)
      }
  },
}

export default VenueAPI
