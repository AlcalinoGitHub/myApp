import {json} from  "@sveltejs/kit"
import { comments } from "$lib/comments.js"

export function GET() { //Nmae is always GET for convention
    return json(comments)
}

export async function POST(requestData) {
    const {request} = requestData
    let { text } = await request.json()
    const newComment = {
        id: comments.length + 1,
        text
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment), {status: 201})
}
 