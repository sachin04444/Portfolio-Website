import { AiFillGithub } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';


const page = () => {


  const name = [{
    Github: "https://github.com/sachin04444/crud-operation-with-API",
    imge: "https://user-images.githubusercontent.com/110024679/203357674-dbd3589b-eb3d-4eaa-8d99-5c00a1e19863.png",
    Title: "Crud-operation",
    Live: ""
  },
  {
    Github: "https://github.com/sachin04444/Unit-converter",
    imge: "https://user-images.githubusercontent.com/110024679/247519426-dbb56a3f-8331-4fa1-aa94-c49d20532f59.png",
    Title: "UNit converter",
    Live: "https://unit-converter04.netlify.app/"
  },
  {
    Github: "https://github.com/sachin04444/Game-with-next-js",
    imge: "https://user-images.githubusercontent.com/110024679/247520918-6eee4a59-7745-4745-8740-45fc2430daba.png",
    Title: "Game",
    Live: "https://game-with-next-js-mauve.vercel.app/"
  }]


  return (
    <>
      <div className="section">
        <div className='header'>
          <div >Projects</div>
        </div>

        <div className="flex">


        {
          name.map((i) => {
            return (
              <>
                <div className="procard flex">
                  <div className="imgtag">
                    <img src={i.imge} alt="" srcset="" />
                  </div>
                  <div>
                    <a href={i.Github} target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href={i.Live} target="_blank" rel="noopener noreferrer"><TbWorldWww /></a>
                  </div>
                </div>
              </>
            )
          })
        }




          {/* <div className="procard flex">
            <div className="imgtag">
              <img src="/me.jpg" alt="" srcset="" />
            </div>
            <div>
            <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><TbWorldWww /></a>
            </div>
          </div>


          <div className="procard flex">
            <div className="imgtag">
              <img src="/me.jpg" alt="" srcset="" />
            </div>
            <div>
            <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><TbWorldWww /></a>
            </div>
          </div> */}

        </div>
      </div>

    </>
  )
}

export default page
