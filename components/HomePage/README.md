# HomePage

The home page, assembled from the components in the order a visitor reads it.

1. `SiteHeader`
2. `Hero`
3. `SectionHead` "Selected work" with a `FilterBar`, then three or four `ProjectCard`s, then `compact` ones two to a row
4. `SectionHead` "More work" with a `WorkIndex`
5. `SectionHead` "Experience" with `ExperienceItem`s
6. `ContactBlock`

Everything between the hero and the contact foot sits inside `.mg-wrap`. Work comes before experience: a visitor decides in the first two sections. The two experience entries shown here are empty slots.
