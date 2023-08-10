import { conn } from './db.js';
export const getUser = (req,res) => { 
    const query ="SELECT * FROM `user_table`"; 
    conn.query(query,(err,data)=> 
    { 
        if(err){ 
            return res.json(err); 
        }else{ 
            return res.json(data); 
      }
    })
 }


export const getUserByid = (req,res) => { 
    const query ="SELECT * FROM `user_table` WHERE u_id=?"; 
    conn.query(query,[req.params.id],(err,data)=> 
    { 
        if(err){ 
            return res.json(err); 
        }else{ 
            return res.json(data[0]); 
      }
    })
 }








export const getData = (req,res) => { 
    // const query ="SELECT * FROM `user_table` WHERE u_id=?"; 
    const query=" SELECT COUNT(*) AS TotalCandidates, SUM(status = 'Joined') AS Joined, SUM(status = 'Interview') AS Interview FROM candidate_status_table WHERE c_id = ?;"
    conn.query(query,[req.params.id],(err,data)=> 
    { 
        if(err){ 
            return res.json(err); 
        }else{ 
            return res.json(data[0]); 
      }
    })
 }








//delete use from database

export const deleteUser=(req,res)=>{
    const query ="DELETE FROM `user_table` WHERE u_id=?";
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
    const query ="INSERT INTO user_table (name) VALUES (?)"; 
    const value = [ 
        req.body.name, 
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