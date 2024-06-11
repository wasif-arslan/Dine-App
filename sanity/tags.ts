import { defineField , defineType } from "sanity"

export const Tags = defineType(
    {
        name : "tags",
        title : "Tags",
        type : "document",
        fields : [
            defineField(
                {
                    name : "tags",
                    title : "Enter your product tags",
                    type : "string"
                }
            )
        ]
    }
)

// name: 'tags',
// title: 'Tags',
// type: 'document',
// fields: [
//   {
//     name: 'title',
//     title: 'Title',
//     type: 'string',
//   },
//   // Add other fields here
// ],