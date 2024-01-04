import React from 'react';

import UserModel from '@/assets/interfaces/user';

function Profile({ params }: { params: any }) {
    return <div>{params.user}</div>;
}

export default Profile;
