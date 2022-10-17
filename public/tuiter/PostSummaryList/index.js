import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
     ${post.map(post => {
        return PostSummaryItem(post);
    }).join('')
    }
           </ul>
`); }


export default PostSummaryList;

// document.body.innerHTML=PostSummaryList();