import { isAdmin } from '../access/isAdmin'
import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'roles',
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['editor'],
      access: {
        // Only admins can create or update a value for this field
        // create: isAdminFieldLevel,
        // update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ]
    },
  ],
}

export default Users
