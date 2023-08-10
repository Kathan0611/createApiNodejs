import { conn } from './db.js';
export const getUser = (req,res) => { 
    const query ="SELECT * FROM `candidate_status_table`"; 
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
    const query ="DELETE FROM `candidate_status_table` WHERE id=?";
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
    const query ="INSERT INTO `candidate_status_table`(`status`,status_updateAt, `c_id`) VALUES (?)"; 
    const value = [ 
        req.body.status,
        req.body.status_updateAt,
        req.body.c_id
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





