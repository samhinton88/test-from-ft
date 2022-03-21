import { useState, useEffect } from 'react'
import Link from "next/link";
import { API_ROOT } from '../../config'
import styles from './index.module.css'

const BlogPostListView = (
  props: any
) => {
  const [
    blogPostList, 
    setBlogPostList
    ] = useState<any[]>([]);
    const [errors, setErrors] = useState<any>(null)
    
    useEffect(()=> {
      const fetchList = async () => {
        const list = await fetch(API_ROOT + `/blog-posts?owner=${activeSession.userId}`)
          .then(res => res.json()).catch(e => setErrors(e));
          
        setBlogPostList(list);
      }
      
      fetchList();
    }, [])
    
  return (
  
  
    <div className={styles.blogPost}>
      <Link
      	href="/blog-post/create"     
      >
        <button>Create</button>
      </Link>
      {errors && JSON.stringify(errors) }
      {   blogPostList?.map(
            item => <div key={item._id} className={styles.blogPostItem}>
              <div>{item.name}</div>
              <Link
                href={`/blog-post/${item._id}`}
              
              >
                <button>View</button>
              </Link>
             </div>
          )
      }
    </div>)
}

export default BlogPostListView




