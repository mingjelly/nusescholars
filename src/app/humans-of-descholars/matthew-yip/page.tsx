import Profile from '../components/Profile';

export default function ProfilePage() {
    return (
        <Profile
            name="Matthew Yip"
            academicYear="AY23/24"
            course="Mechanical Engineering"
            introduction="Hi there! Matthew here, Y3 ME."
            interests="My interest particularly lies in F1 and 3D printing."
            hobbies={['Running', 'Reading', 'Volunteering']}
            imageUrl="/images/Matthew-Yip.jpg"
            linkedInUrl="https://nusmods.com"
        />
    );
}
