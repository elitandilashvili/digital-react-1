import { withUserList } from '../../hoc/WithUserList';

export const PrivatePage = ({ title = ' Private page', userList }) => {
  return (
    <div className="column">
      <h3 className="title"> {title} </h3>
      <div className="columns is-flex-wrap-wrap">
        {userList.map((item) => {
          return (
            <div className="column box is-one-third" key={item.id}>
              {item.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withUserList(PrivatePage);
