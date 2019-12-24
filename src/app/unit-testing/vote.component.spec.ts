import { VoteComponent } from "./vote.component"

describe('VoteComponent', () => {

    let component: VoteComponent

    beforeEach(() => {
        component = new VoteComponent()
    })

    it('Should increment totalVotes when unvoted', () => {
        component.upVote()
        expect(component.totalVotes).toBe(1)
    })

    it('Should decrease totalVotes when downvoted', () => {
        component.downVote()
        expect(component.totalVotes).toBe(-1)
    })

})