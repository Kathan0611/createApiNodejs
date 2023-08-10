import { conn } from './db.js';
export const getUser = (req,res) => { 
    const query ="SELECT * FROM `candidate_table`"; 
    conn.query(query,(err,data)=> 
    { 
        if(err){ 
            return res.json(err); 
        }else{ 
            return res.json(data); 
      }
    })
 }

//delete use from database

export const deleteUser=(req,res)=>{
    const query ="DELETE FROM `candidate_table` WHERE c_id=?";
    conn.query(query,[req.paramas.id],(err,data)=>{
        if(err){
            return res.json(err);
        }
        else{
            return res.json("Data Deleted Successfully...");
        }
    })
}
///insert New User data  
export const insertUser = (req,res) => { 
    const query ="INSERT INTO candidate_table (u_id,candidateName) VALUES (?)"; 
    const value = [
        req.body.u_id, 
        req.body.candidateName, 
    ]; 
    conn.query(query,[value],(err,data)=> 
    { 
        if(err){ 
            return res.json(err); 
        }else{ 
            return res.json('Data added Successfully...'); 
        } 
     }) 
 }