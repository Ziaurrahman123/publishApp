export const ImageGallaryItem = (props) => {
  return (
    <a href={props.wikiUrl} target="blank">
      <table>
        <tr>
          <td>
            <img src={props.imgUrl} alt={props.title} width="180px" />
          </td>
        </tr>
        <tr>
          <td>
            <b>{props.title}</b>
          </td>
        </tr>
      </table>
    </a>
  );
};
