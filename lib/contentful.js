import * as contentful from "contentful"

export const client = contentful.createClient({
    space:process.env.CONTETFUL_SPACE_ID,
    accessToken:process.env.CONTETFUL_ACCESS_TOKEN
})