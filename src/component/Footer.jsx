export default function Footer() {
  return (
    <>
      <h6 className="footer">
        Last Updated: {new Date().toLocaleDateString()}
      </h6>
    </>
  );
}
