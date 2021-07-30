import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Post from './Post'
import { fetchPosts } from '../redux/actions'

export default function FetchedPosts() {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.fetchedPosts)
	const isLoading = useSelector(state => state.app.loading)

	if (!posts.length) {
		return (
			<button
				className='btn btn-primary'
				onClick={() => dispatch(fetchPosts())}
			>
				Загрузить
			</button>
		)
	}
	if (isLoading) {
		return <p>Loading</p>
	} else {
		return posts.map(post => <Post post={post} key={post.id} />)
	}
}
