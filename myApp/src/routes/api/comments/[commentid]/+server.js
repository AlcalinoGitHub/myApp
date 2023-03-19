import {comments} from "$lib/comments.js"
import {json} from  "@sveltejs/kit"

export function GET(requestEvent) {
    const {params} = requestEvent
    const {commentid} = params
    const comment = comments.find((comment) => comment.id === parseInt(commentid))
    return json(comment)
}

export async function PATCH(requestEvent) {
    const {params, request} = requestEvent
    const {commentid} = params
    const {text} =  await request.json()
    for (var i = 0; i < comments.length; i ++){
        if (comments[i].id === parseInt(commentid)){comments[i].text = text; return json(comments[i])}
    }
    return new Response('Not Found')
}

export async function DELETE(requestEvent){
    const {params} = requestEvent
    const {commentid} = params
    const DeletedComment = comments.find((comment)=> comment.id === parseInt(commentid));
    const index = comments.findIndex((comment)=> comment.id === parseInt(commentid))
    comments.splice(index, 1)
    return json(DeletedComment)
}