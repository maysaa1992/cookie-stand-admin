
const Footer = ({ data }) => {
  return (
    <footer  className="p-4 mt-8 bg-green-500 text-black-50">
      <span>{`${data ? data.length : 0} locations world wild`}</span>
    </footer>
  )
}

export default Footer