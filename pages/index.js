import Link from "next/link";
import Header from "../components/Header";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello World!</h1>
        <style jsx>{`
          h1 {
            text-decoration: none;
            color: blue;
          }

          h1:hover {
            opacity: 0.6;
          }
        `}</style>
      </div>
    );
  }
}
export default Index;
