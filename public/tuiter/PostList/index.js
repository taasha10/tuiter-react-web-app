import PostItem from "./PostItem.js";
import posts from "./posts.js"
const PostList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
     ${posts.map(posts => {
        return PostItem(posts);
    }).join('')
    }
           </ul>
`); }


export default PostList;

// document.body.innerHTML=PostList();