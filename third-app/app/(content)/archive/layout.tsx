
// add automatically
export default function ArchiveLayout({
  children,
  archive,
  latest
}: {
  children: React.ReactNode
  archive: React.ReactNode
  latest: React.ReactNode
}) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  )
}