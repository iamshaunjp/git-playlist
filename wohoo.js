import year2020, shaun, me from earth

git = me()


git.pull((req) => {
    if(req.status == 'shaun accepted it') 
        console.log('yay first PR 😃️😃️😃️😃️😃️');
    else 
        console.log('😭️😭️😭️😭️😭️😭️😭️')
        shaun(() => console.log('accept the PR 😎️😎️😎️'), me, year2020);
})

module.export = git