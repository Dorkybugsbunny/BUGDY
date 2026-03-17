interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
  fork: boolean
}

interface GitHubUser {
  login: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
}

export const githubService = {
  async getUserRepos(username: string = 'dorkybugsbunny'): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10&type=owner`)
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      const repos: GitHubRepo[] = await response.json()
      return repos.filter(repo => !repo.fork).slice(0, 6) // Show 6 most recent non-forked repos
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error)
      return []
    }
  },

  async getUserInfo(username: string = 'dorkybugsbunny'): Promise<GitHubUser | null> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching GitHub user info:', error)
      return null
    }
  },

  getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Vue': '#41b883',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#239120',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#ffac45',
      'Kotlin': '#F18E33',
      'Dart': '#00B4AB',
    }
    return colors[language || ''] || '#858585'
  }
}
