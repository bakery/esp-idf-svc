(function() {var implementors = {};
implementors["serde_json"] = [{"text":"impl&lt;'a, Q&gt; IndexMut&lt;&amp;'a Q&gt; for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;String, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;String: Borrow&lt;Q&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: ?Sized + Ord + Eq + Hash,&nbsp;</span>","synthetic":false,"types":["serde_json::map::Map"]},{"text":"impl&lt;I&gt; IndexMut&lt;I&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"serde_json/value/trait.Index.html\" title=\"trait serde_json::value::Index\">Index</a>,&nbsp;</span>","synthetic":false,"types":["serde_json::value::Value"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()