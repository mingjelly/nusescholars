import Profile from "../../../../../../components/Profile";
import PageTemplate from "../../../../../../components/PageTemplate";
import * as path from "path";
import database from "../../../../../data/database.json";

export default function ProfilePage() {
  const studentName : string = path.basename(__dirname);

  const oneFolderUpPath = path.dirname(__dirname);
  const majorName = path.basename(oneFolderUpPath);

  const twoFoldersUpPath = path.dirname(oneFolderUpPath);
  const batchName = path.basename(twoFoldersUpPath);

  console.log(studentName);
  console.log(majorName);
  console.log(batchName);

  //@ts-expect-error ignore to let names be processed as string
  const data = database[batchName][majorName][studentName];

  return (
    <PageTemplate>
      <Profile
        name={data.name}
        academicYear={data.admit_year}
        course={data.major}
        introduction={data.writeup}
        interests={data.interests_hobbies}
        hobbies={["Hobby1", "Hobby2"]}
        imageUrl={"/images/" + batchName + "/" + studentName + ".jpg"}
        linkedInUrl={data.linkedin_url}
      />
    </PageTemplate>
  );
}
