package com.satya.app.data.repository;

import com.google.gson.Gson;
import com.satya.app.data.local.ChatDao;
import com.satya.app.data.remote.OpenRouterApi;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata("javax.inject.Singleton")
@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava",
    "cast"
})
public final class ChatRepository_Factory implements Factory<ChatRepository> {
  private final Provider<OpenRouterApi> apiProvider;

  private final Provider<ChatDao> daoProvider;

  private final Provider<Gson> gsonProvider;

  public ChatRepository_Factory(Provider<OpenRouterApi> apiProvider, Provider<ChatDao> daoProvider,
      Provider<Gson> gsonProvider) {
    this.apiProvider = apiProvider;
    this.daoProvider = daoProvider;
    this.gsonProvider = gsonProvider;
  }

  @Override
  public ChatRepository get() {
    return newInstance(apiProvider.get(), daoProvider.get(), gsonProvider.get());
  }

  public static ChatRepository_Factory create(Provider<OpenRouterApi> apiProvider,
      Provider<ChatDao> daoProvider, Provider<Gson> gsonProvider) {
    return new ChatRepository_Factory(apiProvider, daoProvider, gsonProvider);
  }

  public static ChatRepository newInstance(OpenRouterApi api, ChatDao dao, Gson gson) {
    return new ChatRepository(api, dao, gson);
  }
}
