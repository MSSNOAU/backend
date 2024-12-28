import { CollectionConfig } from 'payload/types';

const Events: CollectionConfig = {
  slug: 'events',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    // {
    //   name: 'date',
    //   type: 'date',
    //   required: true,
    // },
    {
      name: 'location',
      type: 'text',
    },
    // {
    //   name: 'organizer',
    //   type: 'text',
    // },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection for uploads
    },
    {
      name: 'registrationLink',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: ['News', 'Conference', 'Meetup'],
    },
    {
      name: 'status',
      type: 'select',
      options: ['Upcoming', 'Past', 'Cancelled'],
    },
    {
      name: 'capacity',
      type: 'number',
    },
    // {
    //   name: 'tags',
    //   type: 'array',
    //   of: {
    //     type: 'text',
    //   },
    // },
    {
      name: 'createdAt',
      type: 'date',
      defaultValue: new Date(),
    },
    {
      name: 'updatedAt',
      type: 'date',
      defaultValue: new Date(),
    },
  ],
};

export default Events;
