function ProfileCard({
  name,
  role,
  email,
  avatarUrl = 'https://via.placeholder.com/80'
}) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} width="80" />
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default ProfileCard;
