import { useState, useEffect } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import { API_ROOT } from '../../config'
import { LoadingSpinner } from '../../components/loading-spinner';
import styles from './blog-post-detail.module.css'

const BlogPostDetailView = (
  props: any
) => {
  const [
    blogPost, 
    setBlogPost
    ] = useState<any>(null);
    const router = useRouter()
    const { id } = router.query
    
    useEffect(()=> {
      const fetchItem = async () => {
        const data = await fetch(API_ROOT + "/blog-posts/" + id)
          .then(res => res.json());
        setBlogPost(data);
      }
      
      fetchItem();
    }, [])
  
  if (!blogPost) {
  	return <LoadingSpinner />
  }
    
  return (
    <div className={styles.blogPost}>
    <pre>{JSON.stringify(blogPost, null, 2)}</pre>
    </div>
  )
}

export default BlogPostDetailView




