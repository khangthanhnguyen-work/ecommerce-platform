import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },

    {
        name: 'Nguyen Van A',
        email: 'nguyenvana@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },

    {
        name: 'Nguyen Van B',
        email: 'nguyenvanb@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }

];

export default users;