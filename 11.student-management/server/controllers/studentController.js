import Student from "../models/Student.js"




//Post  /api/students

export const createStudent =async(req,res)=>{
    try {
        const student=await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}


//Get  /api/students

export const getStudents=async(req,res)=>{
    try {
        const students=await Student.find({});
        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({message:error.message})
        
    }

}