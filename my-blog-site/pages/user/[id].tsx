import { useState, useEffect } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import { API_ROOT } from '../../config'
import { LoadingSpinner } from '../../components/loading-spinner';
import styles from './user-detail.module.css'

const UserDetailView = (
  props: any
) => {
  const [
    user, 
    setUser
    ] = useState<any>(null);
    const router = useRouter()
    const { id } = router.query
    
    useEffect(()=> {
      const fetchItem = async () => {
        const data = await fetch(API_ROOT + "/users/" + id)
          .then(res => res.json());
        setUser(data);
      }
      
      fetchItem();
    }, [])
  
  if (!user) {
  	return <LoadingSpinner />
  }
    
  return (
    <div className={styles.user}>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default UserDetailView




