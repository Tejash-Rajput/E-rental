import React from 'react';
import UserCard from './UserCard.js';


const users = [
  {
    "id": 1,
    name: 'Jay arora',
    backgroundImage: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/premium-photo/3d-animation-character-cartoon_113255-10608.jpg?w=740',
    followers: '9.1k',
    following: '1.5k',
    totalPosts: '9.2k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 2,
    name: 'Justin hanger',
    backgroundImage: 'https://images.unsplash.com/photo-1575722290270-626b0208df99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/premium-photo/doll-with-yellow-jacket-blue-white-shirt-with-yellow-hood_804007-55085.jpg?w=740',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 3,
    name: 'June hamilton',
    backgroundImage: 'https://images.unsplash.com/photo-1495283897339-a5736d2c12b2?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303095.jpg?w=740&t=st=1717337478~exp=1717338078~hmac=396ca78be9edf50e2a51ae3b267dfc6c7912d26cd91f6f01b8062a91e84c9f58',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 4,
    name: 'ottis steave',
    backgroundImage: 'https://images.unsplash.com/photo-1516670428252-df97bba108d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/premium-photo/3d-cartoon-boy-avatar_113255-5440.jpg?w=740',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 5,
    name: 'Nidhi Prajapati',
    backgroundImage: 'https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/premium-photo/3d-character-cartoon_113255-31690.jpg?w=740',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 6,
    name: 'Joe Root',
    backgroundImage: 'https://images.unsplash.com/photo-1442323794357-25b2ec110967?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/free-photo/3d-illustration-young-man-with-glasses-business-suit_1142-58817.jpg?t=st=1717338894~exp=1717342494~hmac=8f55ebe3a99ae28e41e2f54461501c639ed46c90e1946e2a2af1d861dfb8e443&w=740',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 7,
    name: 'Rishi Shane',
    backgroundImage: 'https://images.unsplash.com/photo-1592784201029-bdb351d47eff?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-related-profession_23-2151419554.jpg?t=st=1717339016~exp=1717342616~hmac=a7e210e16b7460efbe714b66bb8d0df5e38383554eb347ddbe6c46fe8d5a21b3&w=360',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],
  },
  {
    "id": 8,
    name: 'James Anderson',
    backgroundImage: 'https://images.unsplash.com/photo-1715708098685-9db467c094e0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://img.freepik.com/free-photo/3d-illustration-young-man-with-glasses-business-suit_1142-58817.jpg?t=st=1717338894~exp=1717342494~hmac=8f55ebe3a99ae28e41e2f54461501c639ed46c90e1946e2a2af1d861dfb8e443&w=740',
    followers: '8.5k',
    following: '1.2k',
    totalPosts: '7.8k',
    socialMedia: [
      { name: 'Facebook', icon: 'https://img.freepik.com/premium-psd/facebook-icon-isolated-3d-render-illustration_1043525-28.jpg?w=740', link: '#' },
      { name: 'Instagram', icon: 'https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717341026~exp=1717344626~hmac=a00ed32dbca1ef20496eb543e3d880c7dab3a603f8862c4149aca93b5394aa8b&w=740', link: '#' },
      { name: 'LinkedIn', icon: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717341721~exp=1717345321~hmac=d9016b8c988d087f5d7bbe434bc49a48c216c0883785c4e7f593125ddc7c29fe&w=740', link: '#' },
      { name: 'Twitter', icon: 'https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-twitter-icon_125540-2044.jpg?t=st=1717342158~exp=1717345758~hmac=621f31da78a06988eb82542d0f4f4780c92390bdc9e422c713cc573f6c913c7b&w=740', link: '#' },
    ],

  },
];

const UserList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
