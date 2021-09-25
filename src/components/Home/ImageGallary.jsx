import { ImageGallaryItem } from "./ImageGallaryItem";
import {bollywoodData} from "../../state/reducer/bollywoodData";

export const ImageGallary = () => {
  console.log(bollywoodData)
  return (
    <table>
      <tr>
        {
          bollywoodData.data.map((item) =>{
            <td>
              <ImageGallaryItem
              wikiUrl={item.wikiUrl}
              imgUrl={item.imgUrl}
              title={item.title}
              />
              </td>
          }
          )
        }
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Shah_Rukh_Khan" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/330px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" title="Shahrukh Khan" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Salman_Khan" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg/220px-Salman_Khan_at_Renault_Star_Guild_Awards.jpg" title="Salman Khan" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Madhuri_Dixit" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Madhuri_Dixit_promoting_Total_Dhamaal_in_2019_%28cropped%29.jpg/220px-Madhuri_Dixit_promoting_Total_Dhamaal_in_2019_%28cropped%29.jpg" title="Madhuri Dixit" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Nora_Fatehi" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nora_Fatehi_snapped_at_Krome_studio_in_Bandra.jpg/220px-Nora_Fatehi_snapped_at_Krome_studio_in_Bandra.jpg" title="Nora Fatehi" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Aamir_Khan" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Aamir_Khan_graces_the_first_look_launch_of_%E2%80%98Secret_Superstar%E2%80%99.jpg/220px-Aamir_Khan_graces_the_first_look_launch_of_%E2%80%98Secret_Superstar%E2%80%99.jpg" title="Aamir Khan" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Katrina_Kaif" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg/220px-Katrina_Kaif_promoting_Bharat_in_2019.jpg" title="Katrina Kaif" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Akshay_Kumar" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Akshay_Kumar.jpg/220px-Akshay_Kumar.jpg" title="Akshay Kumar" />
        </td>
        <td>
          <ImageGallaryItem wikiUrl="https://en.wikipedia.org/wiki/Deepika_Padukone" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Deepika_Padukone_Cannes_2018_%28cropped%29.jpg/220px-Deepika_Padukone_Cannes_2018_%28cropped%29.jpg" title="Deepika Padukone" />
        </td>
      </tr>
    </table>
  );
};
