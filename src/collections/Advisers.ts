import { CollectionConfig } from 'payload/types'

const Advisers: CollectionConfig = {
  slug: 'advisers',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: "Adviser's Name",
      required: true,
    },
    {
      name: 'post',
      type: 'text',
      label: "Adviser's Name",
      required: true,
    },
    {
      name: 'about',
      type: 'text',
      label: "Adviser's Name",
      required: true,
    },
    {
      name: 'whatsappNo',
      type: 'text',
      label: "Adviser's Name",
      required: true,
    },
    {
      name: 'phoneNo',
      type: 'text',
      label: "Adviser's Name",
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: "Adviser's Email Address",
      required: true,
    },
    // {
    //   name: 'placedBy',
    //   type: 'relationship',
    //   relationTo: 'customers',
    //   required: true,
    // },
  ],
}

export default Advisers;