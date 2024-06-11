import { defineField, defineType } from 'sanity';

export const products = defineType({
  name: "products",
  type: "document",
  title: "All products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product name",
    },
    {
      name: "tags",
      title: "Product tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tags" }] }],
    },
    {
      name: "category",
      title: "Product is for?",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "price",
      type: "number",
      title: "Product price",
    },
    {
      name: "description",
      title: "Product details",
      type: "text",
    },
    {
      name: "care",
      title: "Product care",
      type: "array",
      of: [{ type: "string", title: "Please enter customer care list" }],
    },
    {
      name: "images",
      title: "Product images",
      type: "array",
      of: [
        {
          type: "image",
          title: "Product image",
          options: { hotspot: true },
        },
      ],
    },
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      images: "images",
    },
    prepare(selection) {
      const { images, title, subtitle } = selection;
      return {
        title,
        subtitle: `${images ? Object.keys(images).length : 0} images -> category: ${subtitle}`,
        media: images ? images[0] : undefined,
      };
    },
  },
});
