import { VoteComponent } from './vote.component'

describe('VoteComponent', () => {

  // Init
  let voteComponent = new VoteComponent()

  beforeEach(() => {
    voteComponent.totalVotes = 5
  })

  // Test #1
  it('Should increace totalVotes when upVote is called', () => {
    // Act
    voteComponent.upVote()
    // Asset
    expect(voteComponent.totalVotes).toBe(6)
  })

  // Test #2
  it('Should decrease totalVotes when downVote is called', () => {
    // Act
    voteComponent.downVote()
    // Assert
    expect(voteComponent.totalVotes).toBe(4)
  })

})