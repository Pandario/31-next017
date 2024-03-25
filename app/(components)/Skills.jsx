import { TbBrandNextjs, TbBrandReact, TbBrandGit } from "react-icons/tb";

function Skills() {
  return (
    <div id="skills" className="m-4 pt-8">
        <h1 className="text-3xl font-bold text-center p-4">My skills</h1>
        <h3 className="text-xl text-center mb-4 p-4">My experience with technologies here</h3>    
        <div className="flex justify-center ">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 md:gap-8 mx-auto">
                <div className="flex flex-col items-center p-4 my-1 shadow-lg rounded-lg">
                    {/* Skill 1 */}
                    <TbBrandNextjs className="text-5xl pb-4" />
                    <h3 className="text-xl font-semibold">Fullstack</h3>
                    <p className="p-4 text-gray-500 font-mono">
                        Right now working with new nextjs/typescript. 
                        Working with nextauth, with mongodb,
                        with admin panels, credentials, mailsenders. 
                        Trying dive deeper with backend, aws and azure.
                        
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 my-1 shadow-lg rounded-lg">
                    {/* Skill 2 */}
                    <TbBrandReact className="text-5xl pb-4" />
                    <h3 className="text-xl font-semibold">Frontend</h3>
                    <p className="p-4 text-gray-500 font-mono">
                        Using React and JS. Working with grid, 
                        react hooks. Working with memo, context, with .map.
                        Using and tailwind css-in-js and also familiar with
                        css modules. Have experience with bootstrap, with sliders,
                        building responsive applications.
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 my-1 shadow-lg rounded-lg">
                    {/* Skill 3 */}
                    <TbBrandGit className="text-5xl pb-4" />
                    <h3 className="text-xl font-semibold">Git</h3>
                    <p className="p-4 text-gray-500 font-mono">
                        Can push changes, cloning repos, not using often, 
                        but know branching, commit changes and also have little 
                        experience in merging conflict branches. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills