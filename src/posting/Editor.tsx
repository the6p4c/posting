import type { FormEvent } from "react";

import { PostEdit } from "./Post";

export default function Editor() {
  return (
    <>
      <PostEdit />
      <Settings />
    </>
  );
}

function Settings() {
  const save = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as typeof e.currentTarget & {
      repoUrl: HTMLInputElement;
      pat: HTMLInputElement;
    };

    const repoUrl = form.repoUrl.value;
    const pat = form.pat.value;

    localStorage.setItem("repoUrl", repoUrl);
    localStorage.setItem("pat", pat);
  };

  return (
    <article className="thread">
      <form onSubmit={save} className="form">
        <div className="form-row">
          <label>repo url</label>
          <input name="repoUrl" type="text" required />
          <div className="form-help">
            a github url! that's what you put here
          </div>
        </div>
        <div className="form-row">
          <label>personal access token</label>
          <input name="pat" type="text" required />
          <div className="form-help">
            specify an existing personal access token, or{" "}
            <a
              target="_blank"
              href="https://github.com/settings/personal-access-tokens/new"
            >
              create a new token
            </a>
          </div>
        </div>
        <div className="form-row form-row-end">
          <button type="submit" className="form-button">
            save
          </button>
        </div>
      </form>
    </article>
  );
}
