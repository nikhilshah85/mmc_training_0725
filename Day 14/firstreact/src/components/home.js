function Home()
{
   const developer ='Nikhil Shah';
   const  teamSize =10;
   const teamMembers = ['Nikhil','Ankit','Vishal','Pankaj','Ravi'];

   const projectInfo={
        projectName:'Banking System',
        projectDuration:'2 months',
        projectStatus:'Completed',
        projectTeamMembers: ['Nikhil','Ankit','Vishal','Pankaj','Ravi'], 
        projectTeamSize:10,
        projectDeveloper:'Nikhil Shah'
    }
    


    return (
        <div>
            <h1>Welcome to home page</h1>
        <p> Developed by {developer}</p>
        <p> Team size is {teamSize}</p>

        <p> Team members are </p>

        <ul>
            {
                teamMembers.map((member)=><li>{member}</li>)
            }
        </ul>

        <h1> Project details </h1>
        <h2> {projectInfo.projectName} </h2>
        <p> Project duration is {projectInfo.projectDuration}</p>
        <p> Project status is {projectInfo.projectStatus}</p>
        <p> Project team members are </p>
        <ul>
            {
                projectInfo.projectTeamMembers.map((member)=><li>{member}</li>)
            }
        </ul>
        <p> Project team size is {projectInfo.projectTeamSize}</p>
        <p> Project developer is {projectInfo.projectDeveloper}</p>



        </div>
    )

}

export default Home