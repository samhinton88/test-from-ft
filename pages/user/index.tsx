import { useState, useEffect } from 'react'
import Link from "next/link";
import { API_ROOT } from '../../config'
import styles from './index.module.css'

const UserListView = (
  props: any
) => {
  const [
    userList, 
    setUserList
    ] = useState<any[]>([]);
    const [errors, setErrors] = useState<any>(null)
    
    useEffect(()=> {
      const fetchList = async () => {
        const list = await fetch(API_ROOT + `/users?owner=${activeSession.userId}`)
          .then(res => res.json()).catch(e => setErrors(e));
          
        setUserList(list);
      }
      
      fetchList();
    }, [])
    
  return (
  
  
    <div className={styles.user}>
      <Link
      	href="/user/create"     
      >
        <button>Create</button>
      </Link>
      {errors && JSON.stringify(errors) }
      {   userList?.map(
            item => <div key={item._id} className={styles.userItem}>
              <div>{item.name}</div>
              <Link
                href={`/user/${item._id}`}
              
              >
                <button>View</button>
              </Link>
             </div>
          )
      }
    </div>)
}

export default UserListView




